import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchServiceRequest } from '../redux/actions/actionCreators';
import { Link } from 'react-router-dom';
export default function Services() {
  debugger
  const {items, loading, error} = useSelector(state => state.services);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchServiceRequest());
  };
  useEffect(() => {
    dispatch(searchServiceRequest());
  },[]);
  if (loading){
    return <div className="container_loader"><div className="loader"></div></div>
  }
  if (error !== null){
    return <div className="container_error">
      <div className="error">Произошла ошибка! <button className='btn' onClick={handleSearch}>Повторить запрос</button>
      </div>
      </div>
  }
  return (
  <ul className="services_container">
  {items.map((item) => {
    return <li className="service" key={item.id}>
    <Link to={`/${item.id}/details`}>{item.name}</Link>
  </li>
  })}
  </ul>)
}