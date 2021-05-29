import React, {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useStateSelector} from "../hooks/useStateSelector";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const {searchPackages} = useActions();
  const {data, error, loading} = useStateSelector((state) => state.packages);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchPackages(term);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading &&
    data.map((name) => <div key={name}>{name}</div>)}
  </div>;
};

export default PackagesList;
