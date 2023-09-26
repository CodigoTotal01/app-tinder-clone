import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/AppRouter.jsx";

const TinderApp = () =>  {

  return (
    <>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </>
  )
}

export default TinderApp
