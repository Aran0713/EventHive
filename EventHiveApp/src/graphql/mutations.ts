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
          date
          startTime
          endTime
          id
          createdAt
          updatedAt
          eventDateTimeId
          owner
        }
        nextToken
      }
      location {
        items {
          country
          province
          city
          postalCode
          address
          id
          createdAt
          updatedAt
          eventLocationId
          owner
        }
        nextToken
      }
      description {
        items {
          aboutEvent
          schedule
          id
          createdAt
          updatedAt
          eventDescriptionId
          owner
        }
        nextToken
      }
      contact {
        items {
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          id
          createdAt
          updatedAt
          eventContactId
          owner
        }
        nextToken
      }
      specialAccommodation {
        items {
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          id
          createdAt
          updatedAt
          eventSpecialAccommodationId
          owner
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
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
          date
          startTime
          endTime
          id
          createdAt
          updatedAt
          eventDateTimeId
          owner
        }
        nextToken
      }
      location {
        items {
          country
          province
          city
          postalCode
          address
          id
          createdAt
          updatedAt
          eventLocationId
          owner
        }
        nextToken
      }
      description {
        items {
          aboutEvent
          schedule
          id
          createdAt
          updatedAt
          eventDescriptionId
          owner
        }
        nextToken
      }
      contact {
        items {
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          id
          createdAt
          updatedAt
          eventContactId
          owner
        }
        nextToken
      }
      specialAccommodation {
        items {
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          id
          createdAt
          updatedAt
          eventSpecialAccommodationId
          owner
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
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
          date
          startTime
          endTime
          id
          createdAt
          updatedAt
          eventDateTimeId
          owner
        }
        nextToken
      }
      location {
        items {
          country
          province
          city
          postalCode
          address
          id
          createdAt
          updatedAt
          eventLocationId
          owner
        }
        nextToken
      }
      description {
        items {
          aboutEvent
          schedule
          id
          createdAt
          updatedAt
          eventDescriptionId
          owner
        }
        nextToken
      }
      contact {
        items {
          phone
          email
          website
          ig
          twitter
          snapchat
          tiktok
          youtube
          id
          createdAt
          updatedAt
          eventContactId
          owner
        }
        nextToken
      }
      specialAccommodation {
        items {
          wheelchairAccessibility
          signLanguageInterpretation
          closedCaptioning
          assistiveListeningSystems
          brailleMaterials
          flexibleCommunicationOptions
          accessibleSeating
          serviceAnimalAccommodation
          sensoryAccommodations
          id
          createdAt
          updatedAt
          eventSpecialAccommodationId
          owner
        }
        nextToken
      }
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDateTime = /* GraphQL */ `
  mutation CreateDateTime(
    $input: CreateDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    createDateTime(input: $input, condition: $condition) {
      date
      startTime
      endTime
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDateTimeId
      owner
    }
  }
`;
export const updateDateTime = /* GraphQL */ `
  mutation UpdateDateTime(
    $input: UpdateDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    updateDateTime(input: $input, condition: $condition) {
      date
      startTime
      endTime
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDateTimeId
      owner
    }
  }
`;
export const deleteDateTime = /* GraphQL */ `
  mutation DeleteDateTime(
    $input: DeleteDateTimeInput!
    $condition: ModelDateTimeConditionInput
  ) {
    deleteDateTime(input: $input, condition: $condition) {
      date
      startTime
      endTime
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDateTimeId
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      country
      province
      city
      postalCode
      address
      coordinates {
        items {
          longitude
          latitude
          id
          createdAt
          updatedAt
          locationCoordinatesId
          owner
        }
        nextToken
      }
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
        owner
      }
      id
      createdAt
      updatedAt
      eventLocationId
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      country
      province
      city
      postalCode
      address
      coordinates {
        items {
          longitude
          latitude
          id
          createdAt
          updatedAt
          locationCoordinatesId
          owner
        }
        nextToken
      }
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
        owner
      }
      id
      createdAt
      updatedAt
      eventLocationId
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      country
      province
      city
      postalCode
      address
      coordinates {
        items {
          longitude
          latitude
          id
          createdAt
          updatedAt
          locationCoordinatesId
          owner
        }
        nextToken
      }
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
        owner
      }
      id
      createdAt
      updatedAt
      eventLocationId
      owner
    }
  }
`;
export const createCoordinates = /* GraphQL */ `
  mutation CreateCoordinates(
    $input: CreateCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    createCoordinates(input: $input, condition: $condition) {
      longitude
      latitude
      location {
        country
        province
        city
        postalCode
        address
        coordinates {
          nextToken
        }
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
          image1
          image2
          image3
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        eventLocationId
        owner
      }
      id
      createdAt
      updatedAt
      locationCoordinatesId
      owner
    }
  }
`;
export const updateCoordinates = /* GraphQL */ `
  mutation UpdateCoordinates(
    $input: UpdateCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    updateCoordinates(input: $input, condition: $condition) {
      longitude
      latitude
      location {
        country
        province
        city
        postalCode
        address
        coordinates {
          nextToken
        }
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
          image1
          image2
          image3
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        eventLocationId
        owner
      }
      id
      createdAt
      updatedAt
      locationCoordinatesId
      owner
    }
  }
`;
export const deleteCoordinates = /* GraphQL */ `
  mutation DeleteCoordinates(
    $input: DeleteCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    deleteCoordinates(input: $input, condition: $condition) {
      longitude
      latitude
      location {
        country
        province
        city
        postalCode
        address
        coordinates {
          nextToken
        }
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
          image1
          image2
          image3
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        eventLocationId
        owner
      }
      id
      createdAt
      updatedAt
      locationCoordinatesId
      owner
    }
  }
`;
export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      aboutEvent
      schedule
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDescriptionId
      owner
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      aboutEvent
      schedule
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDescriptionId
      owner
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      aboutEvent
      schedule
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
        owner
      }
      id
      createdAt
      updatedAt
      eventDescriptionId
      owner
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
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
        owner
      }
      id
      createdAt
      updatedAt
      eventContactId
      owner
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
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
        owner
      }
      id
      createdAt
      updatedAt
      eventContactId
      owner
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
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
        owner
      }
      id
      createdAt
      updatedAt
      eventContactId
      owner
    }
  }
`;
export const createSpecialAccommodation = /* GraphQL */ `
  mutation CreateSpecialAccommodation(
    $input: CreateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    createSpecialAccommodation(input: $input, condition: $condition) {
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
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
        owner
      }
      id
      createdAt
      updatedAt
      eventSpecialAccommodationId
      owner
    }
  }
`;
export const updateSpecialAccommodation = /* GraphQL */ `
  mutation UpdateSpecialAccommodation(
    $input: UpdateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    updateSpecialAccommodation(input: $input, condition: $condition) {
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
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
        owner
      }
      id
      createdAt
      updatedAt
      eventSpecialAccommodationId
      owner
    }
  }
`;
export const deleteSpecialAccommodation = /* GraphQL */ `
  mutation DeleteSpecialAccommodation(
    $input: DeleteSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    deleteSpecialAccommodation(input: $input, condition: $condition) {
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
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
        owner
      }
      id
      createdAt
      updatedAt
      eventSpecialAccommodationId
      owner
    }
  }
`;
