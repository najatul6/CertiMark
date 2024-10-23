import loading from "../../../assets/loading/Loading.gif"
const Loading = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <img src={loading} alt="loading" className="w-full h-screen"/>
    </div>
  )
}

export default Loading