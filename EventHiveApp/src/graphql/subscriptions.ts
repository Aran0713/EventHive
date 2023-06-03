/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventID
      eventType
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
          smallDescription
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
      ageLimit
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
      ticketInfo
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventID
      eventType
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
          smallDescription
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
      ageLimit
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
      ticketInfo
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventID
      eventType
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
          smallDescription
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
      ageLimit
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
      ticketInfo
      image1
      image2
      image3
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDateTime = /* GraphQL */ `
  subscription OnCreateDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $owner: String
  ) {
    onCreateDateTime(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDateTimeId
      owner
    }
  }
`;
export const onUpdateDateTime = /* GraphQL */ `
  subscription OnUpdateDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $owner: String
  ) {
    onUpdateDateTime(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDateTimeId
      owner
    }
  }
`;
export const onDeleteDateTime = /* GraphQL */ `
  subscription OnDeleteDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $owner: String
  ) {
    onDeleteDateTime(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDateTimeId
      owner
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
  }
`;
export const onCreateCoordinates = /* GraphQL */ `
  subscription OnCreateCoordinates(
    $filter: ModelSubscriptionCoordinatesFilterInput
    $owner: String
  ) {
    onCreateCoordinates(filter: $filter, owner: $owner) {
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
          eventID
          eventType
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
export const onUpdateCoordinates = /* GraphQL */ `
  subscription OnUpdateCoordinates(
    $filter: ModelSubscriptionCoordinatesFilterInput
    $owner: String
  ) {
    onUpdateCoordinates(filter: $filter, owner: $owner) {
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
          eventID
          eventType
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
export const onDeleteCoordinates = /* GraphQL */ `
  subscription OnDeleteCoordinates(
    $filter: ModelSubscriptionCoordinatesFilterInput
    $owner: String
  ) {
    onDeleteCoordinates(filter: $filter, owner: $owner) {
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
          eventID
          eventType
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
export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $owner: String
  ) {
    onCreateDescription(filter: $filter, owner: $owner) {
      smallDescription
      aboutEvent
      schedule
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDescriptionId
      owner
    }
  }
`;
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $owner: String
  ) {
    onUpdateDescription(filter: $filter, owner: $owner) {
      smallDescription
      aboutEvent
      schedule
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDescriptionId
      owner
    }
  }
`;
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $owner: String
  ) {
    onDeleteDescription(filter: $filter, owner: $owner) {
      smallDescription
      aboutEvent
      schedule
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventDescriptionId
      owner
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventContactId
      owner
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventContactId
      owner
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventContactId
      owner
    }
  }
`;
export const onCreateSpecialAccommodation = /* GraphQL */ `
  subscription OnCreateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $owner: String
  ) {
    onCreateSpecialAccommodation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventSpecialAccommodationId
      owner
    }
  }
`;
export const onUpdateSpecialAccommodation = /* GraphQL */ `
  subscription OnUpdateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $owner: String
  ) {
    onUpdateSpecialAccommodation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventSpecialAccommodationId
      owner
    }
  }
`;
export const onDeleteSpecialAccommodation = /* GraphQL */ `
  subscription OnDeleteSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $owner: String
  ) {
    onDeleteSpecialAccommodation(filter: $filter, owner: $owner) {
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
        eventID
        eventType
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
        ageLimit
        specialAccommodation {
          nextToken
        }
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
      eventSpecialAccommodationId
      owner
    }
  }
`;
