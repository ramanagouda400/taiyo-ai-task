import ContactList from "components/ContactList";
import CreateContact from "components/CreateContact";
import LineGraph from '../components/LineGraph';
import React from "react";

/**
 *
 *
 * @return {*} 
 */
const ContectsPage = () => {
  return (
    <div className="h-full">
      <hr />
      <CreateContact />
      <ContactList />
      
    </div>
  );
};

export default ContectsPage;
