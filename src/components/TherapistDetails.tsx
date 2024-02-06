import Card from "./Card"

type AppProps = {
  title: string,
  bio: string
}

function TherapistDetails({ title, bio }: AppProps) {
  return (
    <>
      <Card>
        <b>Name</b>: {title}
        <p>{bio}</p>
      </Card>
    </>
  )
}

export default TherapistDetails
