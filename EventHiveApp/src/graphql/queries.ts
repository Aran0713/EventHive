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
      }
      nextToken
    }
  }
`;
export const getDateTime = /* GraphQL */ `
  query GetDateTime($id: ID!) {
    getDateTime(id: $id) {
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
export const listDateTimes = /* GraphQL */ `
  query ListDateTimes(
    $filter: ModelDateTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDateTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          image1
          image2
          image3
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
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
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          image1
          image2
          image3
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpecialAccommodation = /* GraphQL */ `
  query GetSpecialAccommodation($id: ID!) {
    getSpecialAccommodation(id: $id) {
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
          image1
          image2
          image3
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
