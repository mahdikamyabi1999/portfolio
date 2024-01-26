import WorkA from "./WorkA"
import WorkB from "./WorkB"
import WorkC from './WorkC'

function Works() {
  return (
    <div id="works">
    <h2 className="text-center 2xl:text-5xl md:text-4xl text-blue mb-28 font-semibold capitaliz tracking-wide">
          Works
        </h2>
    <div className=" flex flex-col gap-16">
      <WorkA/>
      <WorkB/>
      <WorkC/>
    </div>
    </div>
  )
}

export default Works
