/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onCreateEvent(filter: $filter, userName: $userName) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onUpdateEvent(filter: $filter, userName: $userName) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onDeleteEvent(filter: $filter, userName: $userName) {
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
export const onCreateDateTime = /* GraphQL */ `
  subscription OnCreateDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $userName: String
  ) {
    onCreateDateTime(filter: $filter, userName: $userName) {
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
export const onUpdateDateTime = /* GraphQL */ `
  subscription OnUpdateDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $userName: String
  ) {
    onUpdateDateTime(filter: $filter, userName: $userName) {
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
export const onDeleteDateTime = /* GraphQL */ `
  subscription OnDeleteDateTime(
    $filter: ModelSubscriptionDateTimeFilterInput
    $userName: String
  ) {
    onDeleteDateTime(filter: $filter, userName: $userName) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onCreateLocation(filter: $filter, userName: $userName) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onUpdateLocation(filter: $filter, userName: $userName) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onDeleteLocation(filter: $filter, userName: $userName) {
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
export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onCreateDescription(filter: $filter, userName: $userName) {
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
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onUpdateDescription(filter: $filter, userName: $userName) {
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
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onDeleteDescription(filter: $filter, userName: $userName) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onCreateContact(filter: $filter, userName: $userName) {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onUpdateContact(filter: $filter, userName: $userName) {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onDeleteContact(filter: $filter, userName: $userName) {
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
export const onCreateSpecialAccommodation = /* GraphQL */ `
  subscription OnCreateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onCreateSpecialAccommodation(filter: $filter, userName: $userName) {
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
export const onUpdateSpecialAccommodation = /* GraphQL */ `
  subscription OnUpdateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onUpdateSpecialAccommodation(filter: $filter, userName: $userName) {
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
export const onDeleteSpecialAccommodation = /* GraphQL */ `
  subscription OnDeleteSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onDeleteSpecialAccommodation(filter: $filter, userName: $userName) {
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
