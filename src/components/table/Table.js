import {Table} from 'antd';
import './table.scss'
import { useDispatch } from 'react-redux';


const dataSource = [
    {
      key: '1',
      number: '№1',
      coordinatesFromLat: 59.84660399,
      coordinatesFromIng: 30.29496392,
      coordinatesToLat: 59.82934196,
      coordinatesToIng: 30.42423701
    },
    {
      key: '2',
      number: '№2',
      coordinatesFromLat: 59.82934196,
      coordinatesFromIng: 30.42423701,
      coordinatesToLat: 59.82861295,
      coordinatesToIng: 30.41705607
    },
    {
      key: '3',
      number: '№3',
      coordinatesFromLat: 59.83567701,
      coordinatesFromIng: 30.38064206,
      coordinatesToLat: 59.84660399,
      coordinatesToIng: 30.29496392
    },
    {
      key: '4',
      number: '№4',
      coordinatesFromLat: 59.84660399,
      coordinatesFromIng: 30.29496392,
      coordinatesToLat: 59.82761295,
      coordinatesToIng: 30.41705607
    },
    {
      key: '5',
      number: '№5',
      coordinatesFromLat: 59.83567701,
      coordinatesFromIng: 30.38064206,
      coordinatesToLat: 59.84660399,
      coordinatesToIng: 30.29496392
    }
  ];
  
  const columns = [
    {
      title: 'Номер заявки',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'Координаты ОТ lat',
      dataIndex: 'coordinatesFromLat',
      key: 'coordinatesFromLat'
    },
    {
      title: 'Координаты ОТ ing',
      dataIndex: 'coordinatesFromIng',
      key: 'coordinatesFromIng',
    },
    {
      title: 'Координаты ДО lat',
      dataIndex: 'coordinatesToLat',
      key: 'coordinatesToLat',
    },
    {
      title: 'Координаты ДО ing',
      dataIndex: 'coordinatesToIng',
      key: 'coordinatesToIng',
    }
  ];


const TableView = () => {
  
  const dispatch = useDispatch();
  
  function updateRoute(data, e) {
      dispatch({type: "CHOOSE_PATH", payload: data});
      const rows = document.querySelectorAll('.rows');
      console.log(rows)
      rows.forEach(i => i.classList.remove('selected'))
      e.target.parentNode.classList.add('selected')
  }

  return <Table className='table' 
                dataSource={dataSource} 
                columns={columns}
                rowClassName={'rows'}
                onRow={(record) => {
                  return {
                    onClick: (e) => {
                      updateRoute(record, e)
                    }
                  }
                }} />
}

export default TableView