import { Link } from "react-router-dom";
import { selectContact } from "app/contacts/contactSlice";
import { useAppSelector } from "app/hook";

const buttonStyle =
  "bg-black hover:bg-white hover:text-black w-full p-2 text-white outline";

const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  return (
    <div className="flex flex-col items-center p-5 text-center gap-4">
      <Link to="/contact-save">
        <button className={buttonStyle}>Create-New-Contact</button>
      </Link>
      {contacts.length === 0 && (
        <p>No Contact found. Please create New-contact </p>
      )}
    </div>
  );
};

export default CreateContact;
