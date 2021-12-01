/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* An object representing a public alert message.
Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information.
http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://alerts.weather.gov/#technical-notes-v12
*/
export interface Alert {
  /** The identifier of the alert message. */
  id?: AlertId;

  /** A textual description of the area affected by the alert. */
  areaDesc?: string;

  /** Lists of codes for NWS public zones and counties affected by the alert. */
  geocode?: { UGC?: NWSZoneID[]; SAME?: string[] };

  /**
   * An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification.
   *
   */
  affectedZones?: string[];

  /** A list of prior alerts that this alert updates or replaces. */
  references?: { "@id"?: string; identifier?: AlertId; sender?: string; sent?: string }[];

  /**
   * The time of the origination of the alert message.
   * @format date-time
   */
  sent?: string;

  /**
   * The effective time of the information of the alert message.
   * @format date-time
   */
  effective?: string;

  /**
   * The expected time of the beginning of the subject event of the alert message.
   * @format date-time
   */
  onset?: string | null;

  /**
   * The expiry time of the information of the alert message.
   * @format date-time
   */
  expires?: string;

  /**
   * The expected end time of the subject event of the alert message.
   * @format date-time
   */
  ends?: string | null;
  status?: AlertStatus;
  messageType?: AlertMessageType;

  /** The code denoting the category of the subject event of the alert message. */
  category?:
    | "Met"
    | "Geo"
    | "Safety"
    | "Security"
    | "Rescue"
    | "Fire"
    | "Health"
    | "Env"
    | "Transport"
    | "Infra"
    | "CBRNE"
    | "Other";
  severity?: AlertSeverity;
  certainty?: AlertCertainty;
  urgency?: AlertUrgency;

  /** The text denoting the type of the subject event of the alert message. */
  event?: string;

  /** Email address of the NWS webmaster. */
  sender?: string;

  /** The text naming the originator of the alert message. */
  senderName?: string;

  /** The text headline of the alert message. */
  headline?: string | null;

  /** The text describing the subject event of the alert message. */
  description?: string;

  /**
   * The text describing the recommended action to be taken by recipients of the alert message.
   *
   */
  instruction?: string | null;

  /**
   * The code denoting the type of action recommended for the target audience.
   * This corresponds to responseType in the CAP specification.
   *
   */
  response?: "Shelter" | "Evacuate" | "Prepare" | "Execute" | "Avoid" | "Monitor" | "Assess" | "AllClear" | "None";

  /**
   * System-specific additional parameters associated with the alert message.
   * The keys in this object correspond to parameter definitions in the NWS CAP specification.
   *
   */
  parameters?: Record<string, any[]>;
}

export interface AlertCollection {
  /** A title describing the alert collection */
  title?: string;

  /**
   * The last time a change occurred to this collection
   * @format date-time
   */
  updated?: string;

  /** Links for retrieving more data */
  pagination?: { next: string };
}

export type AlertCollectionGeoJson = GeoJsonFeatureCollection & {
  features?: { properties?: Alert }[];
} & AlertCollection;

export type AlertCollectionJsonLd = AlertCollection & { "@context"?: JsonLdContext; "@graph"?: Alert[] };

export type AlertCap = object;

export type AlertGeoJson = GeoJsonFeature & { properties?: Alert };

export interface AlertJsonLd {
  "@graph"?: Alert[];
}

/**
 * The identifier of the alert message.
 */
export type AlertId = string;

export enum AlertCertainty {
  Observed = "Observed",
  Likely = "Likely",
  Possible = "Possible",
  Unlikely = "Unlikely",
  Unknown = "Unknown",
}

export enum AlertMessageType {
  Alert = "Alert",
  Update = "Update",
  Cancel = "Cancel",
  Ack = "Ack",
  Error = "Error",
}

export enum AlertSeverity {
  Extreme = "Extreme",
  Severe = "Severe",
  Moderate = "Moderate",
  Minor = "Minor",
  Unknown = "Unknown",
}

export enum AlertStatus {
  Actual = "Actual",
  Exercise = "Exercise",
  System = "System",
  Test = "Test",
  Draft = "Draft",
}

export enum AlertUrgency {
  Immediate = "Immediate",
  Expected = "Expected",
  Future = "Future",
  Past = "Past",
  Unknown = "Unknown",
}

/**
 * An alert entry in an Atom feed
 */
export interface AlertAtomEntry {
  id?: string;
  updated?: string;
  published?: string;
  author?: { name?: string };
  summary?: string;
  event?: string;
  sent?: string;
  effective?: string;
  expires?: string;
  status?: string;
  msgType?: string;
  category?: string;
  urgency?: string;
  severity?: string;
  certainty?: string;
  areaDesc?: string;
  polygon?: string;
  geocode?: AlertXMLParameter[];
  parameter?: AlertXMLParameter[];
}

export interface AlertXMLParameter {
  valueName?: string;
  value?: string;
}

/**
 * An alert feed in Atom format
 */
export interface AlertAtomFeed {
  id?: string;
  generator?: string;
  updated?: string;
  author?: { name?: string };
  title?: string;
  entry?: AlertAtomEntry[];
}

/**
 * State/territory codes and marine area codes
 */
export type AreaCode = StateTerritoryCode | MarineAreaCode;

/**
 * @format binary
 */
export type BinaryFile = File;

/**
 * A geometry represented in Well-Known Text (WKT) format.
 * @format wkt
 */
export type GeometryString = string | null;

/**
 * A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export type GeoJsonBoundingBox = number[];

/**
 * A GeoJSON coordinate. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export type GeoJsonCoordinate = number[];

/**
 * A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export type GeoJsonGeometry =
  | { type: "Point"; coordinates: GeoJsonCoordinate; bbox?: GeoJsonBoundingBox }
  | { type: "LineString"; coordinates: GeoJsonLineString; bbox?: GeoJsonBoundingBox }
  | { type: "Polygon"; coordinates: GeoJsonPolygon; bbox?: GeoJsonBoundingBox }
  | { type: "MultiPoint"; coordinates: GeoJsonCoordinate[]; bbox?: GeoJsonBoundingBox }
  | { type: "MultiLineString"; coordinates: GeoJsonLineString[]; bbox?: GeoJsonBoundingBox }
  | { type: "MultiPolygon"; coordinates: GeoJsonPolygon[]; bbox?: GeoJsonBoundingBox }
  | null;

/**
 * A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export interface GeoJsonFeature {
  "@context"?: JsonLdContext;

  /** @format uri */
  id?: string;
  type: "Feature";

  /** A GeoJSON geometry object. Please refer to IETF RFC 7946 for information on the GeoJSON format. */
  geometry: GeoJsonGeometry;
  properties: object;
}

/**
 * A GeoJSON feature collection. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export interface GeoJsonFeatureCollection {
  "@context"?: JsonLdContext;
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}

/**
 * A GeoJSON line string. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export type GeoJsonLineString = GeoJsonCoordinate[];

/**
 * A GeoJSON polygon. Please refer to IETF RFC 7946 for information on the GeoJSON format.
 */
export type GeoJsonPolygon = GeoJsonCoordinate[][];

/**
* Raw forecast data for a 2.5km grid square.
This is a list of all potential data layers that may appear. Some layers may not be present in all areas.
* temperature
* dewpoint
* maxTemperature
* minTemperature
* relativeHumidity
* apparentTemperature
* heatIndex
* windChill
* skyCover
* windDirection
* windSpeed
* windGust
* weather
* hazards: Watch and advisory products in effect
* probabilityOfPrecipitation
* quantitativePrecipitation
* iceAccumulation
* snowfallAmount
* snowLevel
* ceilingHeight
* visibility
* transportWindSpeed
* transportWindDirection
* mixingHeight
* hainesIndex
* lightningActivityLevel
* twentyFootWindSpeed
* twentyFootWindDirection
* waveHeight
* wavePeriod
* waveDirection
* primarySwellHeight
* primarySwellDirection
* secondarySwellHeight
* secondarySwellDirection
* wavePeriod2
* windWaveHeight
* dispersionIndex
* pressure: Barometric pressure
* probabilityOfTropicalStormWinds
* probabilityOfHurricaneWinds
* potentialOf15mphWinds
* potentialOf25mphWinds
* potentialOf35mphWinds
* potentialOf45mphWinds
* potentialOf20mphWindGusts
* potentialOf30mphWindGusts
* potentialOf40mphWindGusts
* potentialOf50mphWindGusts
* potentialOf60mphWindGusts
* grasslandFireDangerIndex
* probabilityOfThunder
* davisStabilityIndex
* atmosphericDispersionIndex
* lowVisibilityOccurrenceRiskIndex
* stability
* redFlagThreatIndex
*/
export interface Gridpoint {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** @format uri */
  "@id"?: string;
  "@type"?: "wx:Gridpoint";

  /** @format date-time */
  updateTime?: string;

  /**
   * A time interval in ISO 8601 format. This can be one of:
   *
   *     1. Start and end time
   *     2. Start time and duration
   *     3. Duration and end time
   * The string "NOW" can also be used in place of a start/end time.
   */
  validTimes?: ISO8601Interval;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  elevation?: QuantitativeValue;

  /** @format uri */
  forecastOffice?: string;
  gridId?: string;

  /** @min 0 */
  gridX?: number;

  /** @min 0 */
  gridY?: number;
  weather?: {
    values: {
      validTime: ISO8601Interval;
      value: {
        coverage:
          | "areas"
          | "brief"
          | "chance"
          | "definite"
          | "few"
          | "frequent"
          | "intermittent"
          | "isolated"
          | "likely"
          | "numerous"
          | "occasional"
          | "patchy"
          | "periods"
          | "scattered"
          | "slight_chance"
          | "widespread"
          | null;
        weather:
          | "blowing_dust"
          | "blowing_sand"
          | "blowing_snow"
          | "drizzle"
          | "fog"
          | "freezing_fog"
          | "freezing_drizzle"
          | "freezing_rain"
          | "freezing_spray"
          | "frost"
          | "hail"
          | "haze"
          | "ice_crystals"
          | "ice_fog"
          | "rain"
          | "rain_showers"
          | "sleet"
          | "smoke"
          | "snow"
          | "snow_showers"
          | "thunderstorms"
          | "volcanic_ash"
          | "water_spouts"
          | null;
        intensity: "very_light" | "light" | "moderate" | "heavy" | null;
        visibility: QuantitativeValue;
        attributes: (
          | "damaging_wind"
          | "dry_thunderstorms"
          | "flooding"
          | "gusty_wind"
          | "heavy_rain"
          | "large_hail"
          | "small_hail"
          | "tornadoes"
        )[];
      }[];
    }[];
  };
  hazards?: {
    values: {
      validTime: ISO8601Interval;
      value: { phenomenon: string; significance: string; event_number: number | null }[];
    }[];
  };
}

/**
 * A gridpoint layer consisting of quantitative values (numeric values with associated units of measure).
 */
export interface GridpointQuantitativeValueLayer {
  /**
   * A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".
   * Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.
   * Units with the namespace "nwsUnit" are currently custom and do not align to any standard.
   * Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).
   * Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.
   *
   */
  uom?: UnitOfMeasure;
  values: { validTime: ISO8601Interval; value: number | null }[];
}

export type GridpointGeoJson = GeoJsonFeature & { properties?: Gridpoint };

export type GridpointJsonLd = Gridpoint;

/**
 * A multi-day forecast for a 2.5km grid square.
 */
export interface GridpointForecast {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** Denotes the units used in the textual portions of the forecast. */
  units?: GridpointForecastUnits;

  /** The internal generator class used to create the forecast text (used for NWS debugging). */
  forecastGenerator?: string;

  /**
   * The time this forecast data was generated.
   * @format date-time
   */
  generatedAt?: string;

  /**
   * The last update time of the data this forecast was generated from.
   * @format date-time
   */
  updateTime?: string;

  /**
   * This property is deprecated (use updateTime instead).
   * @format date-time
   */
  updated?: string;

  /**
   * A time interval in ISO 8601 format. This can be one of:
   *
   *     1. Start and end time
   *     2. Start time and duration
   *     3. Duration and end time
   * The string "NOW" can also be used in place of a start/end time.
   */
  validTimes?: ISO8601Interval;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  elevation?: QuantitativeValue;

  /** An array of forecast periods. */
  periods?: GridpointForecastPeriod[];
}

/**
 * An object containing forecast information for a specific time period (generally 12-hour or 1-hour).
 */
export interface GridpointForecastPeriod {
  /**
   * Sequential period number.
   * @min 1
   */
  number?: number;

  /**
   * A textual identifier for the period. This value will not be present for hourly forecasts.
   *
   * @example Tuesday Night
   */
  name?: string;

  /**
   * The starting time that this forecast period is valid for.
   * @format date-time
   */
  startTime?: string;

  /**
   * The ending time that this forecast period is valid for.
   * @format date-time
   */
  endTime?: string;

  /** Indicates whether this period is daytime or nighttime. */
  isDaytime?: boolean;

  /**
   * High/low temperature for the period, depending on whether the period is day or night.
   * This property as an integer value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.
   *
   */
  temperature?: QuantitativeValue | number;

  /**
   * The unit of the temperature value (Fahrenheit or Celsius).
   * This property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the "forecast_temperature_qv" feature flag on the request.
   *
   */
  temperatureUnit?: "F" | "C";

  /**
   * If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)
   *
   */
  temperatureTrend?: "rising" | "falling" | null;

  /**
   * Wind speed for the period.
   * This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.
   *
   */
  windSpeed?: QuantitativeValue | string;

  /**
   * Peak wind gust for the period.
   * This property as an string value is deprecated. Future versions will express this value as a quantitative value object. To make use of the future standard format now, set the "forecast_wind_speed_qv" feature flag on the request.
   *
   */
  windGust?: QuantitativeValue | string | null;

  /** The prevailing direction of the wind for the period, using a 16-point compass. */
  windDirection?:
    | "N"
    | "NNE"
    | "NE"
    | "ENE"
    | "E"
    | "ESE"
    | "SE"
    | "SSE"
    | "S"
    | "SSW"
    | "SW"
    | "WSW"
    | "W"
    | "WNW"
    | "NW"
    | "NNW";

  /**
   * A link to an icon representing the forecast summary.
   * @format uri
   */
  icon?: string;

  /** A brief textual forecast summary for the period. */
  shortForecast?: string;

  /** A detailed textual forecast for the period. */
  detailedForecast?: string;
}

/**
 * Denotes the units used in the textual portions of the forecast.
 */
export enum GridpointForecastUnits {
  Us = "us",
  Si = "si",
}

export type GridpointForecastGeoJson = GeoJsonFeature & { properties?: GridpointForecast };

export type GridpointForecastJsonLd = GridpointForecast & { "@context": JsonLdContext; geometry: GeometryString };

/**
 * A time duration in ISO 8601 format.
 * @pattern ^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?$
 * @example P2DT12H
 */
export type ISO8601Duration = string;

/**
* A time interval in ISO 8601 format. This can be one of:

    1. Start and end time
    2. Start time and duration
    3. Duration and end time
The string "NOW" can also be used in place of a start/end time.
*/
export type ISO8601Interval = string | string | string;

export type JsonLdContext = any[] | object | (any[] & object);

/**
 * Land region code. These correspond to the six NWS regional headquarters:
 * AR: Alaska Region
 * CR: Central Region
 * ER: Eastern Region
 * PR: Pacific Region
 * SR: Southern Region
 * WR: Western Region
 */
export enum LandRegionCode {
  AR = "AR",
  CR = "CR",
  ER = "ER",
  PR = "PR",
  SR = "SR",
  WR = "WR",
}

/**
 * Marine area code as defined in NWS Directive 10-302:
 * AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean
 * AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC
 * GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL
 * LC: Lake St. Clair
 * LE: Lake Erie
 * LH: Lake Huron
 * LM: Lake Michigan
 * LO: Lake Ontario
 * LS: Lake Superior
 * PH: Central Pacific Ocean including Hawaiian waters
 * PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska
 * PM: Western Pacific Ocean including Mariana Island waters
 * PS: South Central Pacific Ocean including American Samoa waters
 * PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border
 * SL: St. Lawrence River above St. Regis
 */
export enum MarineAreaCode {
  AM = "AM",
  AN = "AN",
  GM = "GM",
  LC = "LC",
  LE = "LE",
  LH = "LH",
  LM = "LM",
  LO = "LO",
  LS = "LS",
  PH = "PH",
  PK = "PK",
  PM = "PM",
  PS = "PS",
  PZ = "PZ",
  SL = "SL",
}

/**
 * Marine region code. These are groups of marine areas combined.
 * AL: Alaska waters (PK)
 * AT: Atlantic Ocean (AM, AN)
 * GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)
 * GM: Gulf of Mexico (GM)
 * PA: Eastern Pacific Ocean and U.S. West Coast (PZ)
 * PI: Central and Western Pacific (PH, PM, PS)
 */
export enum MarineRegionCode {
  AL = "AL",
  AT = "AT",
  GL = "GL",
  GM = "GM",
  PA = "PA",
  PI = "PI",
}

/**
 * An object representing a decoded METAR phenomenon string.
 */
export interface MetarPhenomenon {
  intensity: "light" | "heavy" | null;
  modifier: "patches" | "blowing" | "low_drifting" | "freezing" | "shallow" | "partial" | "showers" | null;
  weather:
    | "fog_mist"
    | "dust_storm"
    | "dust"
    | "drizzle"
    | "funnel_cloud"
    | "fog"
    | "smoke"
    | "hail"
    | "snow_pellets"
    | "haze"
    | "ice_crystals"
    | "ice_pellets"
    | "dust_whirls"
    | "spray"
    | "rain"
    | "sand"
    | "snow_grains"
    | "snow"
    | "squalls"
    | "sand_storm"
    | "thunderstorms"
    | "unknown"
    | "volcanic_ash";
  rawString: string;
  inVicinity?: boolean;
}

export enum MetarSkyCoverage {
  OVC = "OVC",
  BKN = "BKN",
  SCT = "SCT",
  FEW = "FEW",
  SKC = "SKC",
  CLR = "CLR",
  VV = "VV",
}

/**
 * Three-letter identifier for a NWS office.
 */
export enum NWSForecastOfficeId {
  AKQ = "AKQ",
  ALY = "ALY",
  BGM = "BGM",
  BOX = "BOX",
  BTV = "BTV",
  BUF = "BUF",
  CAE = "CAE",
  CAR = "CAR",
  CHS = "CHS",
  CLE = "CLE",
  CTP = "CTP",
  GSP = "GSP",
  GYX = "GYX",
  ILM = "ILM",
  ILN = "ILN",
  LWX = "LWX",
  MHX = "MHX",
  OKX = "OKX",
  PBZ = "PBZ",
  PHI = "PHI",
  RAH = "RAH",
  RLX = "RLX",
  RNK = "RNK",
  ABQ = "ABQ",
  AMA = "AMA",
  BMX = "BMX",
  BRO = "BRO",
  CRP = "CRP",
  EPZ = "EPZ",
  EWX = "EWX",
  FFC = "FFC",
  FWD = "FWD",
  HGX = "HGX",
  HUN = "HUN",
  JAN = "JAN",
  JAX = "JAX",
  KEY = "KEY",
  LCH = "LCH",
  LIX = "LIX",
  LUB = "LUB",
  LZK = "LZK",
  MAF = "MAF",
  MEG = "MEG",
  MFL = "MFL",
  MLB = "MLB",
  MOB = "MOB",
  MRX = "MRX",
  OHX = "OHX",
  OUN = "OUN",
  SHV = "SHV",
  SJT = "SJT",
  SJU = "SJU",
  TAE = "TAE",
  TBW = "TBW",
  TSA = "TSA",
  ABR = "ABR",
  APX = "APX",
  ARX = "ARX",
  BIS = "BIS",
  BOU = "BOU",
  CYS = "CYS",
  DDC = "DDC",
  DLH = "DLH",
  DMX = "DMX",
  DTX = "DTX",
  DVN = "DVN",
  EAX = "EAX",
  FGF = "FGF",
  FSD = "FSD",
  GID = "GID",
  GJT = "GJT",
  GLD = "GLD",
  GRB = "GRB",
  GRR = "GRR",
  ICT = "ICT",
  ILX = "ILX",
  IND = "IND",
  IWX = "IWX",
  JKL = "JKL",
  LBF = "LBF",
  LMK = "LMK",
  LOT = "LOT",
  LSX = "LSX",
  MKX = "MKX",
  MPX = "MPX",
  MQT = "MQT",
  OAX = "OAX",
  PAH = "PAH",
  PUB = "PUB",
  RIW = "RIW",
  SGF = "SGF",
  TOP = "TOP",
  UNR = "UNR",
  BOI = "BOI",
  BYZ = "BYZ",
  EKA = "EKA",
  FGZ = "FGZ",
  GGW = "GGW",
  HNX = "HNX",
  LKN = "LKN",
  LOX = "LOX",
  MFR = "MFR",
  MSO = "MSO",
  MTR = "MTR",
  OTX = "OTX",
  PDT = "PDT",
  PIH = "PIH",
  PQR = "PQR",
  PSR = "PSR",
  REV = "REV",
  SEW = "SEW",
  SGX = "SGX",
  SLC = "SLC",
  STO = "STO",
  TFX = "TFX",
  TWC = "TWC",
  VEF = "VEF",
  AER = "AER",
  AFC = "AFC",
  AFG = "AFG",
  AJK = "AJK",
  ALU = "ALU",
  GUM = "GUM",
  HPA = "HPA",
  HFO = "HFO",
  PPG = "PPG",
  STU = "STU",
  NH1 = "NH1",
  NH2 = "NH2",
  ONA = "ONA",
  ONP = "ONP",
}

/**
* UGC identifier for a NWS forecast zone or county.
The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).
The third letter will be Z for public/fire zone or C for county.
* @pattern ^[A-Z]{2}[CZ]\d{3}$
*/
export type NWSZoneID = string;

export enum NWSZoneType {
  Land = "land",
  Marine = "marine",
  Forecast = "forecast",
  Public = "public",
  Coastal = "coastal",
  Offshore = "offshore",
  Fire = "fire",
  County = "county",
}

export interface Observation {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** @format uri */
  "@id"?: string;
  "@type"?: "wx:ObservationStation";

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  elevation?: QuantitativeValue;

  /** @format uri */
  station?: string;

  /** @format date-time */
  timestamp?: string;
  rawMessage?: string;
  textDescription?: string;

  /** @format uri */
  icon?: string;
  presentWeather?: MetarPhenomenon[];

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  temperature?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  dewpoint?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  windDirection?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  windSpeed?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  windGust?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  barometricPressure?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  seaLevelPressure?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  visibility?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  maxTemperatureLast24Hours?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  minTemperatureLast24Hours?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  precipitationLastHour?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  precipitationLast3Hours?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  precipitationLast6Hours?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  relativeHumidity?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  windChill?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  heatIndex?: QuantitativeValue;
  cloudLayers?: { base: QuantitativeValue; amount: MetarSkyCoverage }[];
}

export type ObservationGeoJson = GeoJsonFeature & { properties?: Observation };

export type ObservationJsonLd = Observation;

export type ObservationCollectionGeoJson = GeoJsonFeatureCollection & { features?: { properties?: Observation }[] };

export interface ObservationCollectionJsonLd {
  "@context"?: JsonLdContext;
  "@graph"?: Observation[];
}

export interface ObservationStation {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** @format uri */
  "@id"?: string;
  "@type"?: "wx:ObservationStation";

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  elevation?: QuantitativeValue;
  stationIdentifier?: string;
  name?: string;

  /** @format iana-time-zone-identifier */
  timeZone?: string;

  /**
   * A link to the NWS public forecast zone containing this station.
   * @format uri
   */
  forecast?: string;

  /**
   * A link to the NWS county zone containing this station.
   * @format uri
   */
  county?: string;

  /**
   * A link to the NWS fire weather forecast zone containing this station.
   * @format uri
   */
  fireWeatherZone?: string;
}

export type ObservationStationGeoJson = GeoJsonFeature & { properties?: ObservationStation };

export type ObservationStationJsonLd = ObservationStation & { "@context": JsonLdContext; geometry: GeometryString };

export type ObservationStationCollectionGeoJson = GeoJsonFeatureCollection & {
  features?: { properties?: ObservationStation }[];
  observationStations?: string[];
};

export interface ObservationStationCollectionJsonLd {
  "@context"?: JsonLdContext;
  "@graph"?: ObservationStation[];
  observationStations?: string[];
}

export interface Office {
  "@context"?: JsonLdContext;
  "@type"?: "GovernmentOrganization";

  /** @format uri */
  "@id"?: string;
  id?: string;
  name?: string;
  address?: {
    "@type"?: "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  telephone?: string;
  faxNumber?: string;
  email?: string;

  /** @format uri */
  sameAs?: string;
  nwsRegion?: string;

  /** @format uri */
  parentOrganization?: string;
  responsibleCounties?: string[];
  responsibleForecastZones?: string[];
  responsibleFireZones?: string[];
  approvedObservationStations?: string[];
}

export interface OfficeHeadline {
  "@context"?: JsonLdContext;

  /** @format uri */
  "@id"?: string;
  id?: string;

  /** @format uri */
  office?: string;
  important?: boolean;

  /** @format date-time */
  issuanceTime?: string;

  /** @format uri */
  link?: string;
  name?: string;
  title?: string;
  summary?: string | null;
  content?: string;
}

export interface OfficeHeadlineCollection {
  "@context": JsonLdContext;
  "@graph": OfficeHeadline[];
}

export interface Point {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** @format uri */
  "@id"?: string;
  "@type"?: "wx:Point";

  /** Three-letter identifier for a NWS office. */
  cwa?: NWSForecastOfficeId;

  /** @format uri */
  forecastOffice?: string;

  /** Three-letter identifier for a NWS office. */
  gridId?: NWSForecastOfficeId;

  /** @min 0 */
  gridX?: number;

  /** @min 0 */
  gridY?: number;

  /** @format uri */
  forecast?: string;

  /** @format uri */
  forecastHourly?: string;

  /** @format uri */
  forecastGridData?: string;

  /** @format uri */
  observationStations?: string;
  relativeLocation?: RelativeLocationGeoJson | RelativeLocationJsonLd;

  /** @format uri */
  forecastZone?: string;

  /** @format uri */
  county?: string;

  /** @format uri */
  fireWeatherZone?: string;
  timeZone?: string;
  radarStation?: string;
}

export type PointGeoJson = GeoJsonFeature & { properties?: Point };

export type PointJsonLd = Point & { "@context": JsonLdContext; geometry: GeometryString };

/**
 * @pattern ^(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$
 */
export type PointString = string;

/**
 * Detail about an error. This document conforms to RFC 7807 (Problem Details for HTTP APIs).
 */
export interface ProblemDetail {
  /**
   * A URI reference (RFC 3986) that identifies the problem type. This is only an identifier and is not necessarily a resolvable URL.
   *
   * @format uri
   * @example urn:noaa:nws:api:UnexpectedProblem
   */
  type: string;

  /**
   * A short, human-readable summary of the problem type.
   * @example Unexpected Problem
   */
  title: string;

  /**
   * The HTTP status code (RFC 7231, Section 6) generated by the origin server for this occurrence of the problem.
   *
   * @min 100
   * @max 999
   * @example 500
   */
  status: number;

  /**
   * A human-readable explanation specific to this occurrence of the problem.
   * @example An unexpected problem has occurred.
   */
  detail: string;

  /**
   * A URI reference (RFC 3986) that identifies the specific occurrence of the problem. This is only an identifier and is not necessarily a resolvable URL.
   *
   * @format uri
   * @example urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63
   */
  instance: string;

  /**
   * A unique identifier for the request, used for NWS debugging purposes. Please include this identifier with any correspondence to help us investigate your issue.
   *
   * @example 493c3a1d-f87e-407f-ae2c-24483f5aab63
   */
  correlationId: string;
  [key: string]: any;
}

/**
 * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
 */
export interface QuantitativeValue {
  /** A measured value */
  value?: number | null;

  /** The maximum value of a range of measured values */
  maxValue?: number;

  /** The minimum value of a range of measured values */
  minValue?: number;

  /**
   * A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".
   * Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.
   * Units with the namespace "nwsUnit" are currently custom and do not align to any standard.
   * Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).
   * Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.
   *
   */
  unitCode?: UnitOfMeasure;

  /**
   * For values in observation records, the quality control flag from the MADIS system. The definitions of these flags can be found at https://madis.ncep.noaa.gov/madis_sfc_qc_notes.shtml
   *
   */
  qualityControl?: "Z" | "C" | "S" | "V" | "X" | "Q" | "G" | "B" | "T";
}

export type RegionCode = LandRegionCode | MarineRegionCode;

export interface RelativeLocation {
  city?: string;
  state?: string;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  distance?: QuantitativeValue;

  /**
   * A structured value representing a measurement and its unit of measure. This object is a slighly modified version of the schema.org definition at https://schema.org/QuantitativeValue
   *
   */
  bearing?: QuantitativeValue;
}

export type RelativeLocationGeoJson = GeoJsonFeature & { properties?: RelativeLocation };

export type RelativeLocationJsonLd = RelativeLocation & { geometry: GeometryString };

export enum StateTerritoryCode {
  AL = "AL",
  AK = "AK",
  AS = "AS",
  AR = "AR",
  AZ = "AZ",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  DC = "DC",
  FL = "FL",
  GA = "GA",
  GU = "GU",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  MT = "MT",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  PR = "PR",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VI = "VI",
  VA = "VA",
  WA = "WA",
  WV = "WV",
  WI = "WI",
  WY = "WY",
}

export interface TextProduct {
  "@context"?: JsonLdContext;

  /** @format uri */
  "@id"?: string;
  id?: string;
  wmoCollectiveId?: string;
  issuingOffice?: string;

  /** @format date-time */
  issuanceTime?: string;
  productCode?: string;
  productName?: string;
  productText?: string;
}

export interface TextProductCollection {
  "@context"?: JsonLdContext;
  "@graph"?: TextProduct[];
}

export interface TextProductTypeCollection {
  "@context"?: JsonLdContext;
  "@graph"?: { productCode: string; productName: string }[];
}

export interface TextProductLocationCollection {
  "@context"?: JsonLdContext;
  locations?: Record<string, string | null>;
}

/**
* A string denoting a unit of measure, expressed in the format "{unit}" or "{namespace}:{unit}".
Units with the namespace "wmo" or "wmoUnit" are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}.
Units with the namespace "nwsUnit" are currently custom and do not align to any standard.
Units with no namespace or the namespace "uc" are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156).
Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.
* @pattern ^((wmo|uc|wmoUnit|nwsUnit):)?.*$
*/
export type UnitOfMeasure = string;

export interface Zone {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /** @format uri */
  "@id"?: string;
  "@type"?: "wx:Zone";

  /**
   * UGC identifier for a NWS forecast zone or county.
   * The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).
   * The third letter will be Z for public/fire zone or C for county.
   *
   */
  id?: NWSZoneID;
  type?: NWSZoneType;
  name?: string;

  /** @format date-time */
  effectiveDate?: string;

  /** @format date-time */
  expirationDate?: string;
  state?: StateTerritoryCode | "" | null;
  cwa?: NWSForecastOfficeId[];
  forecastOffices?: string[];
  timeZone?: string[];
  observationStations?: string[];
  radarStation?: string | null;
}

export type ZoneGeoJson = GeoJsonFeature & { properties?: Zone };

export type ZoneJsonLd = Zone;

export type ZoneCollectionGeoJson = GeoJsonFeatureCollection & { features?: { properties?: Zone }[] };

export interface ZoneCollectionJsonLd {
  "@context"?: JsonLdContext;
  "@graph"?: Zone[];
}

/**
 * An object representing a zone area forecast.
 */
export interface ZoneForecast {
  "@context"?: JsonLdContext;

  /** A geometry represented in Well-Known Text (WKT) format. */
  geometry?: GeometryString;

  /**
   * An API link to the zone this forecast is for.
   * @format uri
   */
  zone?: string;

  /**
   * The time this zone forecast product was published.
   * @format date-time
   */
  updated?: string;

  /** An array of forecast periods. */
  periods?: { number: number; name: string; detailedForecast: string }[];
}

export type ZoneForecastGeoJson = GeoJsonFeature & { properties?: ZoneForecast };

export type ZoneForecastJsonLd = ZoneForecast;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.weather.gov";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title weather.gov API
 * @version 1.8.3
 * @baseUrl https://api.weather.gov
 * @externalDocs https://www.weather.gov/documentation/services-web-api
 *
 * weather.gov API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  alerts = {
    /**
     * @description Returns all alerts
     *
     * @name AlertsQuery
     * @request GET:/alerts
     * @secure
     */
    alertsQuery: (
      query?: {
        active?: boolean;
        start?: string;
        end?: string;
        status?: ("actual" | "exercise" | "system" | "test" | "draft")[];
        message_type?: ("alert" | "update" | "cancel")[];
        event?: string[];
        code?: string[];
        area?: AreaCode[];
        point?: PointString;
        region?: MarineRegionCode[];
        region_type?: "land" | "marine";
        zone?: NWSZoneID[];
        urgency?: AlertUrgency[];
        severity?: AlertSeverity[];
        certainty?: AlertCertainty[];
        limit?: number;
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlertCollection, void | ProblemDetail>({
        path: `/alerts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns all currently active alerts
     *
     * @name AlertsActive
     * @request GET:/alerts/active
     * @secure
     */
    alertsActive: (
      query?: {
        status?: ("actual" | "exercise" | "system" | "test" | "draft")[];
        message_type?: ("alert" | "update" | "cancel")[];
        event?: string[];
        code?: string[];
        area?: AreaCode[];
        point?: PointString;
        region?: MarineRegionCode[];
        region_type?: "land" | "marine";
        zone?: NWSZoneID[];
        urgency?: AlertUrgency[];
        severity?: AlertSeverity[];
        certainty?: AlertCertainty[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlertCollection, void | ProblemDetail>({
        path: `/alerts/active`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns info on the number of active alerts
     *
     * @name AlertsActiveCount
     * @request GET:/alerts/active/count
     * @secure
     */
    alertsActiveCount: (params: RequestParams = {}) =>
      this.request<
        {
          total?: number;
          land?: number;
          marine?: number;
          regions?: Record<string, number>;
          areas?: Record<string, number>;
          zones?: Record<string, number>;
        },
        ProblemDetail
      >({
        path: `/alerts/active/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns active alerts for the given NWS public zone or county
     *
     * @name AlertsActiveZone
     * @request GET:/alerts/active/zone/{zoneId}
     * @secure
     */
    alertsActiveZone: (zoneId: NWSZoneID, params: RequestParams = {}) =>
      this.request<AlertCollection, ProblemDetail>({
        path: `/alerts/active/zone/${zoneId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns active alerts for the given area (state or marine area)
     *
     * @name AlertsActiveArea
     * @request GET:/alerts/active/area/{area}
     * @secure
     */
    alertsActiveArea: (area: AreaCode, params: RequestParams = {}) =>
      this.request<AlertCollection, ProblemDetail>({
        path: `/alerts/active/area/${area}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns active alerts for the given marine region
     *
     * @name AlertsActiveRegion
     * @request GET:/alerts/active/region/{region}
     * @secure
     */
    alertsActiveRegion: (region: MarineRegionCode, params: RequestParams = {}) =>
      this.request<AlertCollection, ProblemDetail>({
        path: `/alerts/active/region/${region}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of alert types
     *
     * @name AlertsTypes
     * @request GET:/alerts/types
     * @secure
     */
    alertsTypes: (params: RequestParams = {}) =>
      this.request<{ eventTypes?: string[] }, ProblemDetail>({
        path: `/alerts/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a specific alert
     *
     * @name AlertsSingle
     * @request GET:/alerts/{id}
     * @secure
     */
    alertsSingle: (id: AlertId, params: RequestParams = {}) =>
      this.request<AlertGeoJson, ProblemDetail>({
        path: `/alerts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  glossary = {
    /**
     * @description Returns glossary terms
     *
     * @name Glossary
     * @request GET:/glossary
     * @secure
     */
    glossary: (params: RequestParams = {}) =>
      this.request<{ "@context"?: JsonLdContext; glossary?: { term?: string; definition?: string }[] }, ProblemDetail>({
        path: `/glossary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  gridpoints = {
    /**
     * @description Returns raw numerical forecast data for a 2.5km grid area
     *
     * @name Gridpoint
     * @request GET:/gridpoints/{wfo}/{x},{y}
     * @secure
     */
    gridpoint: (wfo: NWSForecastOfficeId, x: number, y: number, params: RequestParams = {}) =>
      this.request<GridpointGeoJson, ProblemDetail>({
        path: `/gridpoints/${wfo}/${x},${y}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a textual forecast for a 2.5km grid area
     *
     * @name GridpointForecast
     * @request GET:/gridpoints/{wfo}/{x},{y}/forecast
     * @secure
     */
    gridpointForecast: (
      wfo: NWSForecastOfficeId,
      x: number,
      y: number,
      query?: { units?: GridpointForecastUnits },
      params: RequestParams = {},
    ) =>
      this.request<GridpointForecast, ProblemDetail>({
        path: `/gridpoints/${wfo}/${x},${y}/forecast`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a textual hourly forecast for a 2.5km grid area
     *
     * @name GridpointForecastHourly
     * @request GET:/gridpoints/{wfo}/{x},{y}/forecast/hourly
     * @secure
     */
    gridpointForecastHourly: (
      wfo: NWSForecastOfficeId,
      x: number,
      y: number,
      query?: { units?: GridpointForecastUnits },
      params: RequestParams = {},
    ) =>
      this.request<GridpointForecast, ProblemDetail>({
        path: `/gridpoints/${wfo}/${x},${y}/forecast/hourly`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of observation stations usable for a given 2.5km grid area
     *
     * @name GridpointStations
     * @request GET:/gridpoints/{wfo}/{x},{y}/stations
     * @secure
     */
    gridpointStations: (wfo: NWSForecastOfficeId, x: number, y: number, params: RequestParams = {}) =>
      this.request<ObservationStationCollectionGeoJson, ProblemDetail>({
        path: `/gridpoints/${wfo}/${x},${y}/stations`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  icons = {
    /**
     * @description Returns a forecast icon. Icon services in API are deprecated.
     *
     * @name Icons
     * @request GET:/icons/{set}/{timeOfDay}/{first}
     * @deprecated
     * @secure
     */
    icons: (
      set: string,
      timeOfDay: string,
      first: string,
      query?: { size?: "small" | "medium" | "large" | number; fontsize?: number },
      params: RequestParams = {},
    ) =>
      this.request<BinaryFile, ProblemDetail>({
        path: `/icons/${set}/${timeOfDay}/${first}`,
        method: "GET",
        query: query,
        secure: true,
        format: "blob",
        ...params,
      }),

    /**
     * @description Returns a forecast icon. Icon services in API are deprecated.
     *
     * @name IconsDualCondition
     * @request GET:/icons/{set}/{timeOfDay}/{first}/{second}
     * @deprecated
     * @secure
     */
    iconsDualCondition: (
      set: string,
      timeOfDay: string,
      first: string,
      second: string,
      query?: { size?: "small" | "medium" | "large" | number; fontsize?: number },
      params: RequestParams = {},
    ) =>
      this.request<BinaryFile, ProblemDetail>({
        path: `/icons/${set}/${timeOfDay}/${first}/${second}`,
        method: "GET",
        query: query,
        secure: true,
        format: "blob",
        ...params,
      }),

    /**
     * @description Returns a list of icon codes and textual descriptions. Icon services in API are deprecated.
     *
     * @name IconsSummary
     * @request GET:/icons
     * @deprecated
     * @secure
     */
    iconsSummary: (params: RequestParams = {}) =>
      this.request<{ "@context"?: JsonLdContext; icons: Record<string, { description: string }> }, ProblemDetail>({
        path: `/icons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  thumbnails = {
    /**
     * @description Returns a thumbnail image for a satellite region. Image services in API are deprecated.
     *
     * @name SatelliteThumbnails
     * @request GET:/thumbnails/satellite/{area}
     * @deprecated
     * @secure
     */
    satelliteThumbnails: (area: "a" | "e" | "g" | "h" | "p" | "s" | "w", params: RequestParams = {}) =>
      this.request<BinaryFile, ProblemDetail>({
        path: `/thumbnails/satellite/${area}`,
        method: "GET",
        secure: true,
        format: "blob",
        ...params,
      }),
  };
  stations = {
    /**
     * @description Returns a list of observations for a given station
     *
     * @name StationObservationList
     * @request GET:/stations/{stationId}/observations
     * @secure
     */
    stationObservationList: (
      stationId: string,
      query?: { start?: string; end?: string; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<ObservationCollectionGeoJson, ProblemDetail>({
        path: `/stations/${stationId}/observations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the latest observation for a station
     *
     * @name StationObservationLatest
     * @request GET:/stations/{stationId}/observations/latest
     * @secure
     */
    stationObservationLatest: (stationId: string, query?: { require_qc?: boolean }, params: RequestParams = {}) =>
      this.request<Observation, ProblemDetail>({
        path: `/stations/${stationId}/observations/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a single observation.
     *
     * @name StationObservationTime
     * @request GET:/stations/{stationId}/observations/{time}
     * @secure
     */
    stationObservationTime: (stationId: string, time: string, params: RequestParams = {}) =>
      this.request<Observation, ProblemDetail>({
        path: `/stations/${stationId}/observations/${time}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of observation stations.
     *
     * @name ObsStations
     * @request GET:/stations
     * @secure
     */
    obsStations: (query?: { id?: string[]; state?: AreaCode[]; limit?: number }, params: RequestParams = {}) =>
      this.request<ObservationStationCollectionGeoJson, ProblemDetail>({
        path: `/stations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns metadata about a given observation station
     *
     * @name ObsStation
     * @request GET:/stations/{stationId}
     * @secure
     */
    obsStation: (stationId: string, params: RequestParams = {}) =>
      this.request<ObservationStationGeoJson, ProblemDetail>({
        path: `/stations/${stationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  offices = {
    /**
     * @description Returns metadata about a NWS forecast office
     *
     * @name Office
     * @request GET:/offices/{officeId}
     * @secure
     */
    office: (officeId: NWSForecastOfficeId, params: RequestParams = {}) =>
      this.request<Office, ProblemDetail>({
        path: `/offices/${officeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a specific news headline for a given NWS office
     *
     * @name OfficeHeadline
     * @request GET:/offices/{officeId}/headlines/{headlineId}
     * @secure
     */
    officeHeadline: (officeId: NWSForecastOfficeId, headlineId: string, params: RequestParams = {}) =>
      this.request<OfficeHeadline, ProblemDetail>({
        path: `/offices/${officeId}/headlines/${headlineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of news headlines for a given NWS office
     *
     * @name OfficeHeadlines
     * @request GET:/offices/{officeId}/headlines
     * @secure
     */
    officeHeadlines: (officeId: NWSForecastOfficeId, params: RequestParams = {}) =>
      this.request<OfficeHeadlineCollection, ProblemDetail>({
        path: `/offices/${officeId}/headlines`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  points = {
    /**
     * @description Returns metadata about a given latitude/longitude point
     *
     * @name Point
     * @request GET:/points/{point}
     * @secure
     */
    point: (point: PointString, params: RequestParams = {}) =>
      this.request<PointGeoJson, ProblemDetail>({
        path: `/points/${point}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of observation stations for a given point
     *
     * @name PointStations
     * @request GET:/points/{point}/stations
     * @deprecated
     * @secure
     */
    pointStations: (point: PointString, params: RequestParams = {}) =>
      this.request<any, void | ProblemDetail>({
        path: `/points/${point}/stations`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  radar = {
    /**
     * @description Returns a list of radar servers
     *
     * @name RadarServers
     * @request GET:/radar/servers
     * @secure
     */
    radarServers: (query?: { reportingHost?: string }, params: RequestParams = {}) =>
      this.request<any, ProblemDetail>({
        path: `/radar/servers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given radar server
     *
     * @name RadarServer
     * @request GET:/radar/servers/{id}
     * @secure
     */
    radarServer: (id: string, query?: { reportingHost?: string }, params: RequestParams = {}) =>
      this.request<any, ProblemDetail>({
        path: `/radar/servers/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of radar stations
     *
     * @name RadarStations
     * @request GET:/radar/stations
     * @secure
     */
    radarStations: (
      query?: { stationType?: string[]; reportingHost?: string; host?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, ProblemDetail>({
        path: `/radar/stations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given radar station
     *
     * @name RadarStation
     * @request GET:/radar/stations/{stationId}
     * @secure
     */
    radarStation: (stationId: string, query?: { reportingHost?: string; host?: string }, params: RequestParams = {}) =>
      this.request<any, ProblemDetail>({
        path: `/radar/stations/${stationId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given radar station alarms
     *
     * @name RadarStationAlarms
     * @request GET:/radar/stations/{stationId}/alarms
     * @secure
     */
    radarStationAlarms: (stationId: string, params: RequestParams = {}) =>
      this.request<any, ProblemDetail>({
        path: `/radar/stations/${stationId}/alarms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given radar queue
     *
     * @name RadarQueue
     * @request GET:/radar/queues/{host}
     * @secure
     */
    radarQueue: (
      host: string,
      query?: {
        limit?: number;
        arrived?: ISO8601Interval;
        created?: ISO8601Interval;
        published?: ISO8601Interval;
        station?: string;
        type?: string;
        feed?: string;
        resolution?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ProblemDetail>({
        path: `/radar/queues/${host}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given radar wind profiler
     *
     * @name RadarProfiler
     * @request GET:/radar/profilers/{stationId}
     * @secure
     */
    radarProfiler: (
      stationId: string,
      query?: { time?: ISO8601Interval; interval?: ISO8601Duration },
      params: RequestParams = {},
    ) =>
      this.request<any, ProblemDetail>({
        path: `/radar/profilers/${stationId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * @description Returns a list of text products
     *
     * @name ProductsQuery
     * @request GET:/products
     * @secure
     */
    productsQuery: (
      query?: {
        location?: string[];
        start?: string;
        end?: string;
        office?: string[];
        wmoid?: string[];
        type?: string[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TextProductCollection, ProblemDetail>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of valid text product issuance locations
     *
     * @name ProductLocations
     * @request GET:/products/locations
     * @secure
     */
    productLocations: (params: RequestParams = {}) =>
      this.request<TextProductLocationCollection, ProblemDetail>({
        path: `/products/locations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of valid text product types and codes
     *
     * @name ProductTypes
     * @request GET:/products/types
     * @secure
     */
    productTypes: (params: RequestParams = {}) =>
      this.request<TextProductTypeCollection, ProblemDetail>({
        path: `/products/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a specific text product
     *
     * @name Product
     * @request GET:/products/{productId}
     * @secure
     */
    product: (productId: string, params: RequestParams = {}) =>
      this.request<TextProduct, ProblemDetail>({
        path: `/products/${productId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of text products of a given type
     *
     * @name ProductsType
     * @request GET:/products/types/{typeId}
     * @secure
     */
    productsType: (typeId: string, params: RequestParams = {}) =>
      this.request<TextProductCollection, ProblemDetail>({
        path: `/products/types/${typeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of valid text product issuance locations for a given product type
     *
     * @name ProductsTypeLocations
     * @request GET:/products/types/{typeId}/locations
     * @secure
     */
    productsTypeLocations: (typeId: string, params: RequestParams = {}) =>
      this.request<TextProductLocationCollection, ProblemDetail>({
        path: `/products/types/${typeId}/locations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of valid text product types for a given issuance location
     *
     * @name LocationProducts
     * @request GET:/products/locations/{locationId}/types
     * @secure
     */
    locationProducts: (locationId: string, params: RequestParams = {}) =>
      this.request<TextProductTypeCollection, ProblemDetail>({
        path: `/products/locations/${locationId}/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of text products of a given type for a given issuance location
     *
     * @name ProductsTypeLocation
     * @request GET:/products/types/{typeId}/locations/{locationId}
     * @secure
     */
    productsTypeLocation: (typeId: string, locationId: string, params: RequestParams = {}) =>
      this.request<TextProductCollection, ProblemDetail>({
        path: `/products/types/${typeId}/locations/${locationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  zones = {
    /**
     * @description Returns a list of zones
     *
     * @name ZoneList
     * @request GET:/zones
     * @secure
     */
    zoneList: (
      query?: {
        id?: NWSZoneID[];
        area?: AreaCode[];
        region?: RegionCode[];
        type?: ("land" | "marine" | "forecast" | "public" | "coastal" | "offshore" | "fire" | "county")[];
        point?: PointString;
        include_geometry?: boolean;
        limit?: number;
        effective?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ZoneCollectionGeoJson, ProblemDetail>({
        path: `/zones`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of zones of a given type
     *
     * @name ZoneListType
     * @request GET:/zones/{type}
     * @secure
     */
    zoneListType: (
      type: "land" | "marine" | "forecast" | "public" | "coastal" | "offshore" | "fire" | "county",
      query?: {
        id?: NWSZoneID[];
        area?: AreaCode[];
        region?: RegionCode[];
        type?: ("land" | "marine" | "forecast" | "public" | "coastal" | "offshore" | "fire" | "county")[];
        point?: PointString;
        include_geometry?: boolean;
        limit?: number;
        effective?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ZoneCollectionGeoJson, ProblemDetail>({
        path: `/zones/${type}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns metadata about a given zone
     *
     * @name Zone
     * @request GET:/zones/{type}/{zoneId}
     * @secure
     */
    zone: (
      type: "forecast" | "county" | "fire",
      zoneId: NWSZoneID,
      query?: { effective?: string },
      params: RequestParams = {},
    ) =>
      this.request<ZoneGeoJson, ProblemDetail>({
        path: `/zones/${type}/${zoneId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the current zone forecast for a given zone
     *
     * @name ZoneForecast
     * @request GET:/zones/{type}/{zoneId}/forecast
     * @secure
     */
    zoneForecast: (type: string, zoneId: NWSZoneID, params: RequestParams = {}) =>
      this.request<ZoneForecastGeoJson, ProblemDetail>({
        path: `/zones/${type}/${zoneId}/forecast`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of observations for a given zone
     *
     * @name ZoneObs
     * @request GET:/zones/forecast/{zoneId}/observations
     * @secure
     */
    zoneObs: (
      zoneId: NWSZoneID,
      query?: { start?: string; end?: string; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<ObservationCollectionGeoJson, ProblemDetail>({
        path: `/zones/forecast/${zoneId}/observations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of observation stations for a given zone
     *
     * @name ZoneStations
     * @request GET:/zones/forecast/{zoneId}/stations
     * @secure
     */
    zoneStations: (zoneId: NWSZoneID, params: RequestParams = {}) =>
      this.request<ObservationStationCollectionGeoJson, ProblemDetail>({
        path: `/zones/forecast/${zoneId}/stations`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
