
const Shipment = {
    provider: "",
    CurrentStatus: {
        state: "",
        timestamp: ""
    },
    PromisedDate: "",
    TrackingNumber: "",
    TrackingURL: "",
    SupportPhoneNumbers: [],
    TransitEvents: [],
    CreateDate: "",
    isEditableShipment: false,
    nextWorkingDay: []
};

const TransitEvent = {
    state: "",
    timestamp: "",
    hub: "",
    exceptionCode: "",
    reason: ""
};

const NextWorkingDay = {
    dayDate: "",
    dayName: ""
};

module.exports = {
    Shipment,
    TransitEvent,
    NextWorkingDay
};
