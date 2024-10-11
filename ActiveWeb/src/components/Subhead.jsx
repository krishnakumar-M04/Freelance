import propTypes from "prop-types";

const Subhead = (props) => {
  return (
      <div className="bg-gray-100 h-auto w-full mt-32 ">
          <h1 className="pl-28 pt-10 text-2xl font-bold ">{props.sectionName}</h1>
          <div className="pl-32 pt-5 text-xl pb-5 w-42 " >
              <h1 className="cursor-pointer"> <a href=""> Home / {props.sectionName} </a> </h1>
      </div>
    </div>
  )
}
 Subhead.propTypes = {
    sectionName: propTypes.string.isRequired,  // Prop type validation for the section name. It should be a non-empty string.
  };


export default Subhead
