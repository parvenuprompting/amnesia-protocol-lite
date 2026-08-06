export type DetectionType =
  | "email"
  | "phone"
  | "iban"
  | "bsn"
  | "ip"
  | "postcode"
  | "address"
  | "date"
  | "customer"
  | "transaction"
  | "serial"
  | "reference"
  | "person"
  | "link"
  | "other"
  | "apiKey"
  | "accessToken"
  | "jwt"
  | "privateKey"
  | "credentialUrl"
  | "secret"
  | "account"
  | "path"
  | "gitRemote"
  | "cloudResource";

export type Decision = "pending" | "accepted" | "rejected" | "edited";

export type Detection = {
  id: string;
  start: number;
  end: number;
  value: string;
  type: DetectionType;
  confidence: number;
  detector: "regex" | "manual";
  decision: Decision;
};

export const TYPE_LABELS: Record<DetectionType, string> = {
  email: "E-mail",
  phone: "Telefoon",
  iban: "IBAN",
  bsn: "BSN",
  ip: "IP-adres",
  postcode: "Postcode",
  address: "Adres",
  date: "Datum",
  customer: "Klantnummer",
  transaction: "Transactie",
  serial: "Serienummer",
  reference: "Referentie",
  person: "Persoon",
  link: "Link",
  other: "Overig",
  apiKey: "API-key",
  accessToken: "Access token",
  jwt: "JWT",
  privateKey: "Private key",
  credentialUrl: "Credential-URL",
  secret: "Secret",
  account: "Accountnaam",
  path: "Pad",
  gitRemote: "Git-remote",
  cloudResource: "Cloud resource",
};
