
export default function WeatherCard({title, api_res, symbol}) {
  return (
    <div className="p-4 items-center rounded-md flex flex-col gap-1 text-center w-[250px] bg-focusColor backdrop-blur-[10px]">
      <label className="capitalize">{title}</label>
      <span className="text-2xl">{api_res}<span className="text-lg text-gray-300">{symbol}</span> </span>
    </div>
  )
}