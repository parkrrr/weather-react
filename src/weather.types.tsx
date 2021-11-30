export interface ObservationResponse {
    "@context": Array<ContextClass | string>;
    type:       string;
    features:   Feature[];
}

export interface ContextClass {
    "@version":       string;
    wx:               string;
    s:                string;
    geo:              string;
    unit:             string;
    "@vocab":         string;
    geometry:         Distance;
    city:             string;
    state:            string;
    distance:         Distance;
    bearing:          Bearing;
    value:            Value;
    unitCode:         Distance;
    forecastOffice:   Bearing;
    forecastGridData: Bearing;
    publicZone:       Bearing;
    county:           Bearing;
}

export interface Bearing {
    "@type": string;
}

export interface Distance {
    "@id":   string;
    "@type": string;
}

export interface Value {
    "@id": string;
}

export interface Feature {
    id:         string;
    type:       FeatureType;
    geometry:   Geometry;
    properties: Properties;
}

export interface Geometry {
    type:        GeometryType;
    coordinates: number[];
}

export enum GeometryType {
    Point = "Point",
}

export interface Properties {
    "@id":                     string;
    "@type":                   Type;
    elevation:                 Elevation;
    station:                   string;
    timestamp:                 Date;
    rawMessage:                string;
    textDescription:           string;
    icon:                      null | string;
    presentWeather:            PresentWeather[];
    temperature:               QuantitativeValue;
    dewpoint:                  QuantitativeValue;
    windDirection:             QuantitativeValue;
    windSpeed:                 QuantitativeValue;
    windGust:                  QuantitativeValue;
    barometricPressure:        QuantitativeValue;
    seaLevelPressure:          QuantitativeValue;
    visibility:                QuantitativeValue;
    maxTemperatureLast24Hours: Elevation;
    minTemperatureLast24Hours: Elevation;
    precipitationLastHour:     QuantitativeValue;
    precipitationLast3Hours:   QuantitativeValue;
    precipitationLast6Hours:   QuantitativeValue;
    relativeHumidity:          QuantitativeValue;
    windChill:                 QuantitativeValue;
    heatIndex:                 QuantitativeValue;
    cloudLayers:               CloudLayer[];
}

export enum Type {
    WxObservationStation = "wx:ObservationStation",
}

export interface QuantitativeValue {
    unitCode:       UnitCode;
    value:          number | null;
    maxValue:       number | null;
    qualityControl: QualityControl;
}

// https://madis.ncep.noaa.gov/madis_sfc_qc_notes.shtml
export enum QualityControl {
    C = "C",
    S = "S",
    V = "V",
    Z = "Z",
    X = "X",
    Q = "Q",
    G = "G",
    B = "B",
    T = "T"
}

export enum UnitCode {
    WmoUnitDegC = "wmoUnit:degC",
    WmoUnitDegreeAngle = "wmoUnit:degree_(angle)",
    WmoUnitKMH1 = "wmoUnit:km_h-1",
    WmoUnitM = "wmoUnit:m",
    WmoUnitPa = "wmoUnit:Pa",
    WmoUnitPercent = "wmoUnit:percent",
}

export interface CloudLayer {
    base:   Elevation;
    amount: Amount;
}

export enum Amount {
    Broken = "BKN",
    Clear = "CLR",
    Few = "FEW",
    Overcast = "OVC",
    Scattered = "SCT",
    Skc = "SKC",
    Vv = "VV"
}

export interface Elevation {
    unitCode: UnitCode;
    value:    number | null;
}

export interface PresentWeather {
    intensity: null;
    modifier:  null;
    weather:   string;
    rawString: string;
}

export enum FeatureType {
    Feature = "Feature",
}
