/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDateTime = /* GraphQL */ `
  query GetDateTime($id: ID!) {
    getDateTime(id: $id) {
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
export const listDateTimes = /* GraphQL */ `
  query ListDateTimes(
    $filter: ModelDateTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDateTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCoordinates = /* GraphQL */ `
  query GetCoordinates($id: ID!) {
    getCoordinates(id: $id) {
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
export const listCoordinates = /* GraphQL */ `
  query ListCoordinates(
    $filter: ModelCoordinatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoordinates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        longitude
        latitude
        location {
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
        id
        createdAt
        updatedAt
        locationCoordinatesId
        owner
      }
      nextToken
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
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
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSpecialAccommodation = /* GraphQL */ `
  query GetSpecialAccommodation($id: ID!) {
    getSpecialAccommodation(id: $id) {
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
export const listSpecialAccommodations = /* GraphQL */ `
  query ListSpecialAccommodations(
    $filter: ModelSpecialAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialAccommodations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        eventSpecialAccommodationId
        owner
      }
      nextToken
    }
  }
`;
