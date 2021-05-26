import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
import EventComponent from './events/EventComponent';
// import UserSearch from './state/UserSearch';
import UserSearch from './classes/UserSearch';

const App = () => {
    return <div>
        <EventComponent />
        <UserSearch users={[
            {name: 'Sarah', age: 20},
            {name: 'Alex', age: 20},
            {name: 'Michael', age: 20}
        ]} />
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
