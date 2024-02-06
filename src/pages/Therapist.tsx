import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { format, isEqual, isSameDay } from 'date-fns'
import addDuration from 'date-fns-duration'
import TherapistDetails from '../components/TherapistDetails'
import { Therapist as TherapistType, useTherapistQuery, AvailabilitySlot, Maybe } from '../types/graphql'
import Card from '../components/Card'

// In minutes
const DURATION = 30
const MAX_DURATION = 210

// Force dark text color on React.Select
const selectStyles = {
  option: (provided = {}) => ({ ...provided, color: 'black' }),
  control: (provided = {}) => ({ ...provided, color: 'black' }),
  singleValue: (provided = {}) => ({ ...provided, color: 'black' }),
}

function Therapist() {
  const params = useParams()
  const [duration, setDuration] = useState<Maybe<number|undefined>>()
  const [date, setDate] = useState(new Date())
  const [slots, setSlots] = useState<AvailabilitySlot[]>([])
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([])
  const { data, loading, error } = useTherapistQuery({ variables: { id: params.therapistUrn! }})

  useEffect(() => {
    if (data?.therapist.__typename === 'Therapist') {
      const therapist = data?.therapist as TherapistType
      setSlots(therapist.availability)
    }
  }, [data])

  useEffect(() => {
    const todaySlots = slots.filter((s) => isSameDay(s.start, date))
    if (duration) {
      const nextAvailability = todaySlots.reduce(reducer, [] as AvailabilitySlot[])
      setAvailability(nextAvailability)
    } else {
      setAvailability(todaySlots)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, date, slots])

  const reducer = (acc: AvailabilitySlot[], slot: AvailabilitySlot, index: number, todaySlots: AvailabilitySlot[]) => {
    const start = slot.start
    let end = null
    for(let i = 0; i < duration!; i++) {
      const nextIndex = index + i
      if (nextIndex < todaySlots.length) {
        const nextSlot = todaySlots[nextIndex]
        if (duration == 1 || isEqual(addDuration(slot.start, `PT${DURATION*i}M`), nextSlot.start)) {
          end = nextSlot.end
        }
      } else {
        end = null
      }
    }
    if (end) {
      const newSlot = {} as AvailabilitySlot
      newSlot.start = start
      newSlot.end = end
      acc.push(newSlot)
    }
    return acc
  }

  if (loading) return "Loading..."
  if (error) return `Error: ${JSON.stringify(error)}`
  if (data?.therapist.__typename === 'RuubyGraphError') return 'RuubyGraphError'
  const therapist = data?.therapist as TherapistType
  const remaining = availability.map((a) => ({ value: a, label: `${format(a.start, 'P')} - ${format(a.start, 'p')} to ${format(a.end, 'p')}`}))
  const durations = [...Array(MAX_DURATION/DURATION).keys()].map(i => ({ value: i+1, label: `${(i+1)*DURATION} minutes` }))
  return (
    <>
      <h1>Therapist</h1>
      <TherapistDetails title={therapist.displayName} bio={therapist.bio} />
      <hr />
      <form>
        <Card>
          <label>Date:
            <DatePicker selected={date} onChange={(date) => setDate(date!)} />
          </label>
        </Card>
        <Card>
          <label>Treatments duration:
            <Select options={durations} styles={selectStyles} onChange={(option) => setDuration(option?.value)} />
          </label>
        </Card>
        {duration && (
          <Card>
            <label>Availability:
              <Select options={remaining} styles={selectStyles} />
            </label>
          </Card>
        )}
      </form>
    </>
  )
}

export default Therapist
