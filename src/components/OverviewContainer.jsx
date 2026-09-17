import data from "../../data/data.json";
import {OverviewCard} from "./OverviewCard";
const OverviewContainer = () => {
  return (
    <section className="border-2 border-red-600 w-[326px] absolute top-[191px] left-0 right-0 mx-auto">
      {
        data.overview.map(object =>
          <OverviewCard 
          key={object.id}
          user={object.user}
          audienceType={object.audienceType}
          audience={object.audience}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
          />
        )

        
      }
    </section>
  )
};

export default OverviewContainer;