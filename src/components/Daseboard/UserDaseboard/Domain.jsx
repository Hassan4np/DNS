import { useQuery } from "@tanstack/react-query";
import useAxousSecure from "../../Hook/useAxousSecure";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GridLoader } from "react-spinners";
const Domain = () => {
  const axousesecre = useAxousSecure();
  const { data: domain ,refetch,isLoading} = useQuery({
    queryKey: ["domain"],
    queryFn: async () => {
      const res = await axousesecre.get(`/domain`);
      return res.data;
    },
  });
if(isLoading){
 return <div className="flex justify-center items-center mt-[200px]">
    <GridLoader color="#36d7b7" />
 </div>
}
  const handledelte = (id) => {
    console.log(id);
    axousesecre.delete(`/domain/${id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount){
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Domain  is delete successfully`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        refetch()
    }).then(error=>{
        console.log(error)
    })
  };
  return (
    <div className="px-10">
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {domain?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>{item?.domain}</td>
                <td>{item?.price}</td>
                <td>{item?.date}</td>
                <Link to={`/daseboard/update/${item?._id}`}>
                  <td>
                    <MdEdit className="text-2xl text-green-500" />
                  </td>
                </Link>
                <td onClick={() => handledelte(item?._id)}>
                  <MdDelete className="text-2xl text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Domain;
