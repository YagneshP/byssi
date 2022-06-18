import { groq } from "next-sanity";

export const eventQuery = groq`
*[_type == "event"] | order(date desc) {
  name, host, date
}
`;
