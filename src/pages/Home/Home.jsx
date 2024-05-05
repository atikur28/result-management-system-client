import Navbar from "../SharedPages/Navbar";
import { Slider } from "./Slider";

const Home = () => {
    return (
        <div>
            <div className="bg-slate-100 drop-shadow-lg">
              <Navbar></Navbar>
              <Slider/>
            </div>
        </div>
    );
};

export default Home;