import './App.css';
import './index.css';
import { FormEmail} from './FormEmail/index.js';
import { AppDescription } from "./AppDescription/index.js";

function App() {
  return (
    <div className="container containerHome mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          < AppDescription />
        </div>
        <div className="col-sm-12 col-md-6">
          < FormEmail />
        </div>
      </div>
    </div>
  );
}

export default App;
