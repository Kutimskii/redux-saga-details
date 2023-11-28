import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchServiceIdRequest } from '../redux/actions/actionCreators';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ServiceCard () {
  const {items, service, loading, error} = useSelector(state => state.services);
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(searchServiceIdRequest(id));
  };
  const handleClick = () => {
    navigate(-1)
  };
  useEffect(() => {

    dispatch(searchServiceIdRequest(id));
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
  if (!service){
    return
  }
  return (
  <div className="service_card_container">
     <div className="service_card" key={service.id}>
            <h1>{service.name}</h1>
            <p>{service.content}</p>
            <p>{service.price}</p>
            <button onClick={handleClick}>Назад</button>
     </div>

  </div>)
}