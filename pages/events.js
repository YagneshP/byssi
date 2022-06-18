import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../lib/sanity";
import { useRouter } from "next/router";
import { eventQuery } from "../lib/queries";

const events = (props) => {
  const { eventdata, preview } = props;

  const router = useRouter();

  const { data: events } = usePreviewSubscription(eventQuery, {
    initialData: eventdata,
    enabled: preview || router.query.preview !== undefined,
  });
  return (
    <>
      {events &&
        events.map((event) => (
          <article>
            <h3 className='text-lg'> {event.name} </h3>
            <p className='mt-3'>{event.host}</p>
          </article>
        ))}
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const event = await getClient(preview).fetch(eventQuery);

  return {
    props: {
      eventdata: event,
      preview,
    },
    revalidate: 10,
  };
}

export default events;
