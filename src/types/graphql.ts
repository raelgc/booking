import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  postcode?: Maybe<Postcode>;
};

/** Error codes that can be returned in responses */
export enum ApiError {
  /** The customer was not found in our system but the sign in attempt did not contain any personal details */
  AppleSignInMissingDetails = 'APPLE_SIGN_IN_MISSING_DETAILS',
  /** The status of booking is incompatible with the operation */
  BookingIncompatibleStatus = 'BOOKING_INCOMPATIBLE_STATUS',
  /** Booking is not found */
  BookingNotFound = 'BOOKING_NOT_FOUND',
  /** Booking does not have outstanding amount */
  BookingNoOutstandingAmount = 'BOOKING_NO_OUTSTANDING_AMOUNT',
  /** There is no payment request for a booking or it is expired */
  BookingPaymentRequestNotFound = 'BOOKING_PAYMENT_REQUEST_NOT_FOUND',
  /** The customer was not found in our system but the sign in attempt did not contain any personal details */
  FacebookSignInMissingDetails = 'FACEBOOK_SIGN_IN_MISSING_DETAILS',
  /** A unspecific error occurred */
  GeneralError = 'GENERAL_ERROR',
  /** The provided start and end dates are either invalid or start is after end date */
  InvalidDates = 'INVALID_DATES',
  /** The provided phone number is invalid */
  InvalidPhoneNumber = 'INVALID_PHONE_NUMBER',
  /** The provided postcode is invalid */
  InvalidPostcode = 'INVALID_POSTCODE',
  /** The request the OTP code was supplied for had expired */
  OtpExpired = 'OTP_EXPIRED',
  /** The OTP code was incorrect */
  OtpInvalidCode = 'OTP_INVALID_CODE',
  /** The OTP method was invalid */
  OtpInvalidMethod = 'OTP_INVALID_METHOD',
  /** The user has reached the maximum number of OTP attempts */
  OtpMaxAttemptsReached = 'OTP_MAX_ATTEMPTS_REACHED',
  /** Payment gateway error */
  PaymentGatewayError = 'PAYMENT_GATEWAY_ERROR',
  /** The email already exists in the database */
  SignupEmailAlreadyInUse = 'SIGNUP_EMAIL_ALREADY_IN_USE',
  /** The phone number already exists in the database */
  SignupPhoneAlreadyInUse = 'SIGNUP_PHONE_ALREADY_IN_USE',
  /** Therapist is not found */
  TherapistNotFound = 'THERAPIST_NOT_FOUND'
}

/** Permission roles */
export enum AuthRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Therapist = 'THERAPIST'
}

/** Authorisation tokens */
export type AuthTokens = {
  __typename?: 'AuthTokens';
  /** An access token to use when making authenticated requests */
  accessToken: Scalars['String']['output'];
};

export type AvailabilitySlot = {
  __typename?: 'AvailabilitySlot';
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  address?: Maybe<Address>;
  bookingTreatments: Array<Maybe<BookingTreatment>>;
  outstandingAmount: Scalars['Float']['output'];
  status: BookingStatus;
  therapist: Therapist;
  timeEnds: Scalars['DateTime']['output'];
  timeStarts: Scalars['DateTime']['output'];
  urn: Scalars['String']['output'];
};

export type BookingFee = {
  __typename?: 'BookingFee';
  amount: Scalars['Float']['output'];
};

export type BookingFeeResponse = BookingFee | RuubyGraphError;

export type BookingRequestPayment = {
  __typename?: 'BookingRequestPayment';
  paymentRequestToken: Scalars['String']['output'];
};

export type BookingRequestPaymentResponse = BookingRequestPayment | RuubyGraphError;

export enum BookingStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  InProgress = 'IN_PROGRESS',
  TherapistOnWay = 'THERAPIST_ON_WAY',
  Unconfirmed = 'UNCONFIRMED'
}

export type BookingTransaction = {
  __typename?: 'BookingTransaction';
  amount: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  type: BookingTransactionType;
};

export enum BookingTransactionType {
  AdminFee = 'ADMIN_FEE',
  BraintreeTransaction = 'BRAINTREE_TRANSACTION',
  CustomerCredit = 'CUSTOMER_CREDIT',
  ExternalCommission = 'EXTERNAL_COMMISSION',
  Invoice = 'INVOICE',
  PromoCode = 'PROMO_CODE',
  RuubyComplimentary = 'RUUBY_COMPLIMENTARY'
}

export type BookingTreatment = {
  __typename?: 'BookingTreatment';
  price: Scalars['Float']['output'];
  treatment: Treatment;
};

export type BookingTreatmentParams = {
  quantity: Scalars['Int']['input'];
  urn: Scalars['String']['input'];
};

export type BookingsResultSet = {
  __typename?: 'BookingsResultSet';
  /** The last created date of bookings */
  lastTimeCreated?: Maybe<Scalars['DateTime']['output']>;
  /** Total number of bookings */
  totalCount: Scalars['Int']['output'];
};

/** Contact methods supported for sign in */
export enum ContactMethod {
  Apple = 'APPLE',
  Email = 'EMAIL',
  Facebook = 'FACEBOOK',
  Phone = 'PHONE'
}

/** Response when a contact verification token is issued */
export type ContactVerificationToken = {
  __typename?: 'ContactVerificationToken';
  /** The token to represent the validated contact method when registering a user */
  verifiedContactToken?: Maybe<Scalars['String']['output']>;
};

export type Cursors = {
  __typename?: 'Cursors';
  after?: Maybe<Scalars['String']['output']>;
  before?: Maybe<Scalars['String']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  urn: Scalars['String']['output'];
};

export type MerchandisingPrice = {
  __typename?: 'MerchandisingPrice';
  isFromPrice: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeBookingPaymentRequest: PaymentRequestCompleteResponse;
  /** Request an OTP code to be sent to verify the customer has access to the email address */
  otpEmailRequest: OtpRequestResponse;
  /** Request an OTP code to be sent to verify the customer has access to the contact method */
  otpPhoneRequest: OtpRequestResponse;
  /** Validate a sent OTP code */
  otpValidate: SignInResponse;
  /** Register a new customer that has already validated their email */
  registerCustomerWithValidatedEmail: RegisterCustomerResponse;
  /** Register a new customer that has already validated their phone number */
  registerCustomerWithValidatedPhone: RegisterCustomerResponse;
  /** Request booking payment */
  requestBookingPayment: BookingRequestPaymentResponse;
  signInWithApple: RegisterCustomerResponse;
  signInWithFacebook: SignInResponse;
};


export type MutationCompleteBookingPaymentRequestArgs = {
  paymentMethodNonce: Scalars['String']['input'];
  paymentRequestToken: Scalars['String']['input'];
};


export type MutationOtpEmailRequestArgs = {
  deviceTime: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationOtpPhoneRequestArgs = {
  deviceTime: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationOtpValidateArgs = {
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationRegisterCustomerWithValidatedEmailArgs = {
  agreesToEmailMarketing: Scalars['Boolean']['input'];
  emailValidationToken: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationRegisterCustomerWithValidatedPhoneArgs = {
  agreesToEmailMarketing: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneValidationToken: Scalars['String']['input'];
};


export type MutationRequestBookingPaymentArgs = {
  bookingUrn: Scalars['String']['input'];
};


export type MutationSignInWithAppleArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  identityToken: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignInWithFacebookArgs = {
  identityToken: Scalars['String']['input'];
};

/** Response from the otpRequest mutation */
export type OtpRequestResponse = OtpRequestSuccess | RuubyGraphError;

/** An OTP code was successfully sent */
export type OtpRequestSuccess = {
  __typename?: 'OtpRequestSuccess';
  /** The token to use when validating the OTP code */
  token: Scalars['String']['output'];
};

export type PaymentRequestComplete = {
  __typename?: 'PaymentRequestComplete';
  isSuccess: Scalars['Boolean']['output'];
};

export type PaymentRequestCompleteResponse = PaymentRequestComplete | RuubyGraphError;

export type PaymentRequestedBooking = {
  __typename?: 'PaymentRequestedBooking';
  address?: Maybe<Address>;
  bookingTreatments: Array<Maybe<BookingTreatment>>;
  braintreeToken: Scalars['String']['output'];
  outstandingAmount: Scalars['Float']['output'];
  therapist: Therapist;
  timeEnds: Scalars['DateTime']['output'];
  timeStarts: Scalars['DateTime']['output'];
  urn: Scalars['String']['output'];
};

export type PaymentRequestedBookingResponse = PaymentRequestedBooking | RuubyGraphError;

export type Postcode = {
  __typename?: 'Postcode';
  code?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get booking fee amount */
  bookingFee: BookingFeeResponse;
  /** Get booking fee description */
  bookingFeeDescription: Scalars['String']['output'];
  /** Get booking for which payment is requested */
  paymentRequestedBooking: PaymentRequestedBookingResponse;
  /** Current status of the API */
  status: Status;
  /** Get a therapist by URN or slug */
  therapist: TherapistResponse;
  /** Search therapists */
  therapists: TherapistsResponse;
};


export type QueryBookingFeeArgs = {
  bookingTreatments: Array<InputMaybe<BookingTreatmentParams>>;
  therapistUrn: Scalars['String']['input'];
  timeStarts: Scalars['DateTime']['input'];
};


export type QueryPaymentRequestedBookingArgs = {
  paymentRequestToken: Scalars['String']['input'];
};


export type QueryTherapistArgs = {
  id: Scalars['String']['input'];
};


export type QueryTherapistsArgs = {
  availabilityFromTime?: InputMaybe<Scalars['DateTime']['input']>;
  availabilityToTime?: InputMaybe<Scalars['DateTime']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  subCategories?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Response from the customer registration */
export type RegisterCustomerResponse = AuthTokens | RuubyGraphError;

/** The input data of the customer who has already validated via phone OTP */
export type RegisterCustomerWithEmailInput = {
  agreesToEmailMarketing: Scalars['Boolean']['input'];
  contactValidationToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  customer?: Maybe<Customer>;
  rating: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Response for errors */
export type RuubyGraphError = {
  __typename?: 'RuubyGraphError';
  /** The error code */
  error: ApiError;
};

/** Response from customer sign in */
export type SignInResponse = AuthTokens | ContactVerificationToken | RuubyGraphError;

/** Current status of the API */
export type Status = {
  __typename?: 'Status';
  status: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

/** Ruuby therapist */
export type Therapist = {
  __typename?: 'Therapist';
  /** Therapist availability */
  availability: Array<AvailabilitySlot>;
  /** The therapist's avatar image URL */
  avatarImageUrl?: Maybe<Scalars['String']['output']>;
  /** The therapist's bio */
  bio: Scalars['String']['output'];
  /** Bookings for the therapist */
  bookings: BookingsResultSet;
  /** The customer facing name for the therapist */
  displayName: Scalars['String']['output'];
  /** Therapist postcode */
  districts: Array<Scalars['String']['output']>;
  /** An array of URLs of the therapist's gallery images */
  galleryImageUrls: Array<Scalars['String']['output']>;
  /** Therapist's products */
  products?: Maybe<Scalars['String']['output']>;
  /** Reviews for the therapist */
  reviews: TherapistReviewsResultSet;
  /** The therapist's tier */
  tier: TherapistTier;
  /** Therapist's treatments */
  treatments: Array<TherapistTreatment>;
  /** The therapist URN */
  urn: Scalars['String']['output'];
  /** The therapist first active workstation */
  workstation?: Maybe<Scalars['Int']['output']>;
};


/** Ruuby therapist */
export type TherapistAvailabilityArgs = {
  end?: InputMaybe<Scalars['DateTime']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
};


/** Ruuby therapist */
export type TherapistBookingsArgs = {
  status?: InputMaybe<Array<InputMaybe<BookingStatus>>>;
};


/** Ruuby therapist */
export type TherapistReviewsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
};


/** Ruuby therapist */
export type TherapistTreatmentsArgs = {
  postcode?: InputMaybe<Scalars['String']['input']>;
};

/** Ruuby therapist response */
export type TherapistResponse = RuubyGraphError | Therapist;

export type TherapistReviewsResultSet = {
  __typename?: 'TherapistReviewsResultSet';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<Review>;
  totalAverageRating?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

/** Therapist tier */
export type TherapistTier = {
  __typename?: 'TherapistTier';
  /** The tier description */
  description: Scalars['String']['output'];
  /** The tier name */
  name: Scalars['String']['output'];
  /** The tier type */
  tier: TherapistTierType;
};

/** The therapist tier enum */
export enum TherapistTierType {
  BlackLabel = 'BLACK_LABEL',
  Classic = 'CLASSIC',
  Elite = 'ELITE',
  Hospitality = 'HOSPITALITY',
  OnDemand = 'ON_DEMAND'
}

export type TherapistTreatment = {
  __typename?: 'TherapistTreatment';
  merchandisingPrice: MerchandisingPrice;
  treatment: Treatment;
};

/** Therapist search response */
export type TherapistsResponse = RuubyGraphError | TherapistsResultSet;

export type TherapistsResultSet = {
  __typename?: 'TherapistsResultSet';
  cursors: Cursors;
  items: Array<Therapist>;
};

export type Treatment = {
  __typename?: 'Treatment';
  categories: Array<TreatmentCategory>;
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type TreatmentCategory = {
  __typename?: 'TreatmentCategory';
  name: Scalars['String']['output'];
  parent?: Maybe<TreatmentCategory>;
  urn: Scalars['String']['output'];
};

export type TherapistQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TherapistQuery = { __typename?: 'Query', therapist: { __typename?: 'RuubyGraphError' } | { __typename?: 'Therapist', displayName: string, bio: string, districts: Array<string>, availability: Array<{ __typename?: 'AvailabilitySlot', start: any, end: any }> } };


export const TherapistDocument = gql`
    query therapist($id: String!) {
  therapist(id: $id) {
    ... on Therapist {
      availability {
        start
        end
      }
      displayName
      bio
      districts
    }
  }
}
    `;

/**
 * __useTherapistQuery__
 *
 * To run a query within a React component, call `useTherapistQuery` and pass it any options that fit your needs.
 * When your component renders, `useTherapistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTherapistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTherapistQuery(baseOptions: Apollo.QueryHookOptions<TherapistQuery, TherapistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TherapistQuery, TherapistQueryVariables>(TherapistDocument, options);
      }
export function useTherapistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TherapistQuery, TherapistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TherapistQuery, TherapistQueryVariables>(TherapistDocument, options);
        }
export function useTherapistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TherapistQuery, TherapistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TherapistQuery, TherapistQueryVariables>(TherapistDocument, options);
        }
export type TherapistQueryHookResult = ReturnType<typeof useTherapistQuery>;
export type TherapistLazyQueryHookResult = ReturnType<typeof useTherapistLazyQuery>;
export type TherapistSuspenseQueryHookResult = ReturnType<typeof useTherapistSuspenseQuery>;
export type TherapistQueryResult = Apollo.QueryResult<TherapistQuery, TherapistQueryVariables>;