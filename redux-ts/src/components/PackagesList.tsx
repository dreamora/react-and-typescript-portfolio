import React, {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useStateSelector} from "../hooks/useStateSelector";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const {searchPackages} = useActions();
  const {data, error, loading} = useStateSelector((state) => state.packages);
  console.log({data, error, loading});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchPackages(term);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
  </div>;
};

export default PackagesList;
