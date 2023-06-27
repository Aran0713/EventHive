/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      dateTime {
        items {
          id
          date
          startTime
          endTime
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        items {
          id
          country
          province
          city
          postalCode
          address
          longitude
          latitude
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      description {
        items {
          id
          aboutEvent
          schedule
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      contact {
        items {
          id
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      specialAccommodation {
        items {
          id
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      dateTime {
        items {
          id
          date
          startTime
          endTime
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        items {
          id
          country
          province
          city
          postalCode
          address
          longitude
          latitude
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      description {
        items {
          id
          aboutEvent
          schedule
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      contact {
        items {
          id
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      specialAccommodation {
        items {
          id
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      dateTime {
        items {
          id
          date
          startTime
          endTime
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      location {
        items {
          id
          country
          province
          city
          postalCode
          address
          longitude
          latitude
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      description {
        items {
          id
          aboutEvent
          schedule
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      contact {
        items {
          id
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      specialAccommodation {
        items {
          id
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          userName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
    }
  }
`;
export const createDateTime = /* GraphQL */ `
  mutation CreateDateTime(
    $input: CreateDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    createDateTime(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDateTime = /* GraphQL */ `
  mutation UpdateDateTime(
    $input: UpdateDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    updateDateTime(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDateTime = /* GraphQL */ `
  mutation DeleteDateTime(
    $input: DeleteDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    deleteDateTime(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      country
      province
      city
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      country
      province
      city
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      country
      province
      city
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSpecialAccommodation = /* GraphQL */ `
  mutation CreateSpecialAccommodation(
    $input: CreateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    createSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpecialAccommodation = /* GraphQL */ `
  mutation UpdateSpecialAccommodation(
    $input: UpdateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    updateSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpecialAccommodation = /* GraphQL */ `
  mutation DeleteSpecialAccommodation(
    $input: DeleteSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    deleteSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        dateTime {
          nextToken
        }
        location {
          nextToken
        }
        description {
          nextToken
        }
        contact {
          nextToken
        }
        specialAccommodation {
          nextToken
        }
        image1
        image2
        image3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
