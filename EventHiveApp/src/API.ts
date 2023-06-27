/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  organization: string,
  userName: string,
  userId?: string | null,
  eventName: string,
  eventPrivacy: string,
  eventType?: string | null,
  smallDescription?: string | null,
  ageLimit?: number | null,
  ticketInfo?: string | null,
  image1?: string | null,
  image2?: string | null,
  image3?: string | null,
};

export type ModelEventConditionInput = {
  organization?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  eventPrivacy?: ModelStringInput | null,
  eventType?: ModelStringInput | null,
  smallDescription?: ModelStringInput | null,
  ageLimit?: ModelIntInput | null,
  ticketInfo?: ModelStringInput | null,
  image1?: ModelStringInput | null,
  image2?: ModelStringInput | null,
  image3?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  organization: string,
  userName: string,
  userId?: string | null,
  eventName: string,
  eventPrivacy: string,
  eventType?: string | null,
  smallDescription?: string | null,
  ageLimit?: number | null,
  ticketInfo?: string | null,
  dateTime?: ModelDateTimeConnection | null,
  location?: ModelLocationConnection | null,
  description?: ModelDescriptionConnection | null,
  contact?: ModelContactConnection | null,
  specialAccommodation?: ModelSpecialAccommodationConnection | null,
  image1?: string | null,
  image2?: string | null,
  image3?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDateTimeConnection = {
  __typename: "ModelDateTimeConnection",
  items:  Array<DateTime | null >,
  nextToken?: string | null,
};

export type DateTime = {
  __typename: "DateTime",
  id: string,
  date: string,
  startTime?: string | null,
  endTime?: string | null,
  userName: string,
  eventID: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  postalCode?: string | null,
  address?: string | null,
  longitude: string,
  latitude: string,
  userName: string,
  eventID: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDescriptionConnection = {
  __typename: "ModelDescriptionConnection",
  items:  Array<Description | null >,
  nextToken?: string | null,
};

export type Description = {
  __typename: "Description",
  id: string,
  aboutEvent?: string | null,
  schedule?: string | null,
  userName: string,
  eventID: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  ig?: string | null,
  twitter?: string | null,
  snapchat?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  userName: string,
  eventID: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSpecialAccommodationConnection = {
  __typename: "ModelSpecialAccommodationConnection",
  items:  Array<SpecialAccommodation | null >,
  nextToken?: string | null,
};

export type SpecialAccommodation = {
  __typename: "SpecialAccommodation",
  id: string,
  wheelchairAccessibility?: string | null,
  signLanguageInterpretation?: string | null,
  closedCaptioning?: string | null,
  assistiveListeningSystems?: string | null,
  brailleMaterials?: string | null,
  flexibleCommunicationOptions?: string | null,
  accessibleSeating?: string | null,
  serviceAnimalAccommodation?: string | null,
  sensoryAccommodations?: string | null,
  userName: string,
  eventID: string,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  organization?: string | null,
  userName?: string | null,
  userId?: string | null,
  eventName?: string | null,
  eventPrivacy?: string | null,
  eventType?: string | null,
  smallDescription?: string | null,
  ageLimit?: number | null,
  ticketInfo?: string | null,
  image1?: string | null,
  image2?: string | null,
  image3?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateDateTimeInput = {
  id?: string | null,
  date: string,
  startTime?: string | null,
  endTime?: string | null,
  userName: string,
  eventID: string,
};

export type ModelDateTimeConditionInput = {
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelDateTimeConditionInput | null > | null,
  or?: Array< ModelDateTimeConditionInput | null > | null,
  not?: ModelDateTimeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDateTimeInput = {
  id: string,
  date?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  userName?: string | null,
  eventID?: string | null,
};

export type DeleteDateTimeInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  postalCode?: string | null,
  address?: string | null,
  longitude: string,
  latitude: string,
  userName: string,
  eventID: string,
};

export type ModelLocationConditionInput = {
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  address?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type UpdateLocationInput = {
  id: string,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  postalCode?: string | null,
  address?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  userName?: string | null,
  eventID?: string | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateDescriptionInput = {
  id?: string | null,
  aboutEvent?: string | null,
  schedule?: string | null,
  userName: string,
  eventID: string,
};

export type ModelDescriptionConditionInput = {
  aboutEvent?: ModelStringInput | null,
  schedule?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelDescriptionConditionInput | null > | null,
  or?: Array< ModelDescriptionConditionInput | null > | null,
  not?: ModelDescriptionConditionInput | null,
};

export type UpdateDescriptionInput = {
  id: string,
  aboutEvent?: string | null,
  schedule?: string | null,
  userName?: string | null,
  eventID?: string | null,
};

export type DeleteDescriptionInput = {
  id: string,
};

export type CreateContactInput = {
  id?: string | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  ig?: string | null,
  twitter?: string | null,
  snapchat?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  userName: string,
  eventID: string,
};

export type ModelContactConditionInput = {
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  ig?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  snapchat?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type UpdateContactInput = {
  id: string,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  ig?: string | null,
  twitter?: string | null,
  snapchat?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  userName?: string | null,
  eventID?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateSpecialAccommodationInput = {
  id?: string | null,
  wheelchairAccessibility?: string | null,
  signLanguageInterpretation?: string | null,
  closedCaptioning?: string | null,
  assistiveListeningSystems?: string | null,
  brailleMaterials?: string | null,
  flexibleCommunicationOptions?: string | null,
  accessibleSeating?: string | null,
  serviceAnimalAccommodation?: string | null,
  sensoryAccommodations?: string | null,
  userName: string,
  eventID: string,
};

export type ModelSpecialAccommodationConditionInput = {
  wheelchairAccessibility?: ModelStringInput | null,
  signLanguageInterpretation?: ModelStringInput | null,
  closedCaptioning?: ModelStringInput | null,
  assistiveListeningSystems?: ModelStringInput | null,
  brailleMaterials?: ModelStringInput | null,
  flexibleCommunicationOptions?: ModelStringInput | null,
  accessibleSeating?: ModelStringInput | null,
  serviceAnimalAccommodation?: ModelStringInput | null,
  sensoryAccommodations?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelSpecialAccommodationConditionInput | null > | null,
  or?: Array< ModelSpecialAccommodationConditionInput | null > | null,
  not?: ModelSpecialAccommodationConditionInput | null,
};

export type UpdateSpecialAccommodationInput = {
  id: string,
  wheelchairAccessibility?: string | null,
  signLanguageInterpretation?: string | null,
  closedCaptioning?: string | null,
  assistiveListeningSystems?: string | null,
  brailleMaterials?: string | null,
  flexibleCommunicationOptions?: string | null,
  accessibleSeating?: string | null,
  serviceAnimalAccommodation?: string | null,
  sensoryAccommodations?: string | null,
  userName?: string | null,
  eventID?: string | null,
};

export type DeleteSpecialAccommodationInput = {
  id: string,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  organization?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  eventPrivacy?: ModelStringInput | null,
  eventType?: ModelStringInput | null,
  smallDescription?: ModelStringInput | null,
  ageLimit?: ModelIntInput | null,
  ticketInfo?: ModelStringInput | null,
  image1?: ModelStringInput | null,
  image2?: ModelStringInput | null,
  image3?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelDateTimeFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelDateTimeFilterInput | null > | null,
  or?: Array< ModelDateTimeFilterInput | null > | null,
  not?: ModelDateTimeFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  address?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelDescriptionFilterInput = {
  id?: ModelIDInput | null,
  aboutEvent?: ModelStringInput | null,
  schedule?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelDescriptionFilterInput | null > | null,
  or?: Array< ModelDescriptionFilterInput | null > | null,
  not?: ModelDescriptionFilterInput | null,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  ig?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  snapchat?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelSpecialAccommodationFilterInput = {
  id?: ModelIDInput | null,
  wheelchairAccessibility?: ModelStringInput | null,
  signLanguageInterpretation?: ModelStringInput | null,
  closedCaptioning?: ModelStringInput | null,
  assistiveListeningSystems?: ModelStringInput | null,
  brailleMaterials?: ModelStringInput | null,
  flexibleCommunicationOptions?: ModelStringInput | null,
  accessibleSeating?: ModelStringInput | null,
  serviceAnimalAccommodation?: ModelStringInput | null,
  sensoryAccommodations?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelSpecialAccommodationFilterInput | null > | null,
  or?: Array< ModelSpecialAccommodationFilterInput | null > | null,
  not?: ModelSpecialAccommodationFilterInput | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  organization?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  eventName?: ModelSubscriptionStringInput | null,
  eventPrivacy?: ModelSubscriptionStringInput | null,
  eventType?: ModelSubscriptionStringInput | null,
  smallDescription?: ModelSubscriptionStringInput | null,
  ageLimit?: ModelSubscriptionIntInput | null,
  ticketInfo?: ModelSubscriptionStringInput | null,
  image1?: ModelSubscriptionStringInput | null,
  image2?: ModelSubscriptionStringInput | null,
  image3?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDateTimeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDateTimeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDateTimeFilterInput | null > | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  country?: ModelSubscriptionStringInput | null,
  province?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  postalCode?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  longitude?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionDescriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aboutEvent?: ModelSubscriptionStringInput | null,
  schedule?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDescriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionDescriptionFilterInput | null > | null,
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  ig?: ModelSubscriptionStringInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  snapchat?: ModelSubscriptionStringInput | null,
  tiktok?: ModelSubscriptionStringInput | null,
  youtube?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
};

export type ModelSubscriptionSpecialAccommodationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  wheelchairAccessibility?: ModelSubscriptionStringInput | null,
  signLanguageInterpretation?: ModelSubscriptionStringInput | null,
  closedCaptioning?: ModelSubscriptionStringInput | null,
  assistiveListeningSystems?: ModelSubscriptionStringInput | null,
  brailleMaterials?: ModelSubscriptionStringInput | null,
  flexibleCommunicationOptions?: ModelSubscriptionStringInput | null,
  accessibleSeating?: ModelSubscriptionStringInput | null,
  serviceAnimalAccommodation?: ModelSubscriptionStringInput | null,
  sensoryAccommodations?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSpecialAccommodationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpecialAccommodationFilterInput | null > | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDateTimeMutationVariables = {
  input: CreateDateTimeInput,
  condition?: ModelDateTimeConditionInput | null,
};

export type CreateDateTimeMutation = {
  createDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDateTimeMutationVariables = {
  input: UpdateDateTimeInput,
  condition?: ModelDateTimeConditionInput | null,
};

export type UpdateDateTimeMutation = {
  updateDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDateTimeMutationVariables = {
  input: DeleteDateTimeInput,
  condition?: ModelDateTimeConditionInput | null,
};

export type DeleteDateTimeMutation = {
  deleteDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDescriptionMutationVariables = {
  input: CreateDescriptionInput,
  condition?: ModelDescriptionConditionInput | null,
};

export type CreateDescriptionMutation = {
  createDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDescriptionMutationVariables = {
  input: UpdateDescriptionInput,
  condition?: ModelDescriptionConditionInput | null,
};

export type UpdateDescriptionMutation = {
  updateDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDescriptionMutationVariables = {
  input: DeleteDescriptionInput,
  condition?: ModelDescriptionConditionInput | null,
};

export type DeleteDescriptionMutation = {
  deleteDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpecialAccommodationMutationVariables = {
  input: CreateSpecialAccommodationInput,
  condition?: ModelSpecialAccommodationConditionInput | null,
};

export type CreateSpecialAccommodationMutation = {
  createSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpecialAccommodationMutationVariables = {
  input: UpdateSpecialAccommodationInput,
  condition?: ModelSpecialAccommodationConditionInput | null,
};

export type UpdateSpecialAccommodationMutation = {
  updateSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpecialAccommodationMutationVariables = {
  input: DeleteSpecialAccommodationInput,
  condition?: ModelSpecialAccommodationConditionInput | null,
};

export type DeleteSpecialAccommodationMutation = {
  deleteSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDateTimeQueryVariables = {
  id: string,
};

export type GetDateTimeQuery = {
  getDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDateTimesQueryVariables = {
  filter?: ModelDateTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDateTimesQuery = {
  listDateTimes?:  {
    __typename: "ModelDateTimeConnection",
    items:  Array< {
      __typename: "DateTime",
      id: string,
      date: string,
      startTime?: string | null,
      endTime?: string | null,
      userName: string,
      eventID: string,
      event?:  {
        __typename: "Event",
        id: string,
        organization: string,
        userName: string,
        userId?: string | null,
        eventName: string,
        eventPrivacy: string,
        eventType?: string | null,
        smallDescription?: string | null,
        ageLimit?: number | null,
        ticketInfo?: string | null,
        image1?: string | null,
        image2?: string | null,
        image3?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      country?: string | null,
      province?: string | null,
      city?: string | null,
      postalCode?: string | null,
      address?: string | null,
      longitude: string,
      latitude: string,
      userName: string,
      eventID: string,
      event?:  {
        __typename: "Event",
        id: string,
        organization: string,
        userName: string,
        userId?: string | null,
        eventName: string,
        eventPrivacy: string,
        eventType?: string | null,
        smallDescription?: string | null,
        ageLimit?: number | null,
        ticketInfo?: string | null,
        image1?: string | null,
        image2?: string | null,
        image3?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDescriptionQueryVariables = {
  id: string,
};

export type GetDescriptionQuery = {
  getDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDescriptionsQueryVariables = {
  filter?: ModelDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDescriptionsQuery = {
  listDescriptions?:  {
    __typename: "ModelDescriptionConnection",
    items:  Array< {
      __typename: "Description",
      id: string,
      aboutEvent?: string | null,
      schedule?: string | null,
      userName: string,
      eventID: string,
      event?:  {
        __typename: "Event",
        id: string,
        organization: string,
        userName: string,
        userId?: string | null,
        eventName: string,
        eventPrivacy: string,
        eventType?: string | null,
        smallDescription?: string | null,
        ageLimit?: number | null,
        ticketInfo?: string | null,
        image1?: string | null,
        image2?: string | null,
        image3?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      ig?: string | null,
      twitter?: string | null,
      snapchat?: string | null,
      tiktok?: string | null,
      youtube?: string | null,
      userName: string,
      eventID: string,
      event?:  {
        __typename: "Event",
        id: string,
        organization: string,
        userName: string,
        userId?: string | null,
        eventName: string,
        eventPrivacy: string,
        eventType?: string | null,
        smallDescription?: string | null,
        ageLimit?: number | null,
        ticketInfo?: string | null,
        image1?: string | null,
        image2?: string | null,
        image3?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpecialAccommodationQueryVariables = {
  id: string,
};

export type GetSpecialAccommodationQuery = {
  getSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpecialAccommodationsQueryVariables = {
  filter?: ModelSpecialAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecialAccommodationsQuery = {
  listSpecialAccommodations?:  {
    __typename: "ModelSpecialAccommodationConnection",
    items:  Array< {
      __typename: "SpecialAccommodation",
      id: string,
      wheelchairAccessibility?: string | null,
      signLanguageInterpretation?: string | null,
      closedCaptioning?: string | null,
      assistiveListeningSystems?: string | null,
      brailleMaterials?: string | null,
      flexibleCommunicationOptions?: string | null,
      accessibleSeating?: string | null,
      serviceAnimalAccommodation?: string | null,
      sensoryAccommodations?: string | null,
      userName: string,
      eventID: string,
      event?:  {
        __typename: "Event",
        id: string,
        organization: string,
        userName: string,
        userId?: string | null,
        eventName: string,
        eventPrivacy: string,
        eventType?: string | null,
        smallDescription?: string | null,
        ageLimit?: number | null,
        ticketInfo?: string | null,
        image1?: string | null,
        image2?: string | null,
        image3?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  userName?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  userName?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  userName?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    organization: string,
    userName: string,
    userId?: string | null,
    eventName: string,
    eventPrivacy: string,
    eventType?: string | null,
    smallDescription?: string | null,
    ageLimit?: number | null,
    ticketInfo?: string | null,
    dateTime?:  {
      __typename: "ModelDateTimeConnection",
      items:  Array< {
        __typename: "DateTime",
        id: string,
        date: string,
        startTime?: string | null,
        endTime?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        country?: string | null,
        province?: string | null,
        city?: string | null,
        postalCode?: string | null,
        address?: string | null,
        longitude: string,
        latitude: string,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?:  {
      __typename: "ModelDescriptionConnection",
      items:  Array< {
        __typename: "Description",
        id: string,
        aboutEvent?: string | null,
        schedule?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contact?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        phone?: string | null,
        email?: string | null,
        website?: string | null,
        ig?: string | null,
        twitter?: string | null,
        snapchat?: string | null,
        tiktok?: string | null,
        youtube?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    specialAccommodation?:  {
      __typename: "ModelSpecialAccommodationConnection",
      items:  Array< {
        __typename: "SpecialAccommodation",
        id: string,
        wheelchairAccessibility?: string | null,
        signLanguageInterpretation?: string | null,
        closedCaptioning?: string | null,
        assistiveListeningSystems?: string | null,
        brailleMaterials?: string | null,
        flexibleCommunicationOptions?: string | null,
        accessibleSeating?: string | null,
        serviceAnimalAccommodation?: string | null,
        sensoryAccommodations?: string | null,
        userName: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    image1?: string | null,
    image2?: string | null,
    image3?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDateTimeSubscriptionVariables = {
  filter?: ModelSubscriptionDateTimeFilterInput | null,
  userName?: string | null,
};

export type OnCreateDateTimeSubscription = {
  onCreateDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDateTimeSubscriptionVariables = {
  filter?: ModelSubscriptionDateTimeFilterInput | null,
  userName?: string | null,
};

export type OnUpdateDateTimeSubscription = {
  onUpdateDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDateTimeSubscriptionVariables = {
  filter?: ModelSubscriptionDateTimeFilterInput | null,
  userName?: string | null,
};

export type OnDeleteDateTimeSubscription = {
  onDeleteDateTime?:  {
    __typename: "DateTime",
    id: string,
    date: string,
    startTime?: string | null,
    endTime?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  userName?: string | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  userName?: string | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  userName?: string | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    postalCode?: string | null,
    address?: string | null,
    longitude: string,
    latitude: string,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionDescriptionFilterInput | null,
  userName?: string | null,
};

export type OnCreateDescriptionSubscription = {
  onCreateDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionDescriptionFilterInput | null,
  userName?: string | null,
};

export type OnUpdateDescriptionSubscription = {
  onUpdateDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionDescriptionFilterInput | null,
  userName?: string | null,
};

export type OnDeleteDescriptionSubscription = {
  onDeleteDescription?:  {
    __typename: "Description",
    id: string,
    aboutEvent?: string | null,
    schedule?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  userName?: string | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  userName?: string | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  userName?: string | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    ig?: string | null,
    twitter?: string | null,
    snapchat?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpecialAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialAccommodationFilterInput | null,
  userName?: string | null,
};

export type OnCreateSpecialAccommodationSubscription = {
  onCreateSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpecialAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialAccommodationFilterInput | null,
  userName?: string | null,
};

export type OnUpdateSpecialAccommodationSubscription = {
  onUpdateSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpecialAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialAccommodationFilterInput | null,
  userName?: string | null,
};

export type OnDeleteSpecialAccommodationSubscription = {
  onDeleteSpecialAccommodation?:  {
    __typename: "SpecialAccommodation",
    id: string,
    wheelchairAccessibility?: string | null,
    signLanguageInterpretation?: string | null,
    closedCaptioning?: string | null,
    assistiveListeningSystems?: string | null,
    brailleMaterials?: string | null,
    flexibleCommunicationOptions?: string | null,
    accessibleSeating?: string | null,
    serviceAnimalAccommodation?: string | null,
    sensoryAccommodations?: string | null,
    userName: string,
    eventID: string,
    event?:  {
      __typename: "Event",
      id: string,
      organization: string,
      userName: string,
      userId?: string | null,
      eventName: string,
      eventPrivacy: string,
      eventType?: string | null,
      smallDescription?: string | null,
      ageLimit?: number | null,
      ticketInfo?: string | null,
      dateTime?:  {
        __typename: "ModelDateTimeConnection",
        nextToken?: string | null,
      } | null,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      description?:  {
        __typename: "ModelDescriptionConnection",
        nextToken?: string | null,
      } | null,
      contact?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      specialAccommodation?:  {
        __typename: "ModelSpecialAccommodationConnection",
        nextToken?: string | null,
      } | null,
      image1?: string | null,
      image2?: string | null,
      image3?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
