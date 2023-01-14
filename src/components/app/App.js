import './App.scss';
import TableView from '../table/Table';
import Map from '../map/Map';

function App() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="app-container">
        <TableView/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
