import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxousSecure from "../../Hook/useAxousSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GridLoader } from "react-spinners";

const Update = () => {
  const axousesecre = useAxousSecure();
  const { id } = useParams();
  const navagete = useNavigate();
  const { register, handleSubmit} = useForm();

  const { data: domain, isLoading } = useQuery({
    queryKey: ["domain", id],
    queryFn: async () => {
      const res = await axousesecre.get(`/domain/${id}`);
      return res.data;
    },
  });
  if(isLoading){
    return <div className="flex justify-center items-center mt-[200px]">
       <GridLoader color="#36d7b7" />
    </div>
   }
  const onSubmit = async (data) => {
    const domaininfo = await axousesecre.put(`/domain/${id}`, data);
    console.log(domaininfo);
    if (domaininfo.data.acknowledged) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Domain is Update successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navagete("/daseboard/domain");
  };
  return (
    <div>
      <div className="px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="  gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Domain Name</span>
              </label>
              <input
                type="text"
                {...register("domain", { required: true })}
                placeholder="DomainName"
                className="input input-bordered w-full"
                defaultValue={domain?.domain}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Date"
                defaultValue="jobs"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="  gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                {...register("details", { required: true })}
                placeholder="Details"
                className="input input-bordered w-full"
                defaultValue={domain?.details}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={domain?.price}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                {...register("rating", { required: true })}
                placeholder="Rating"
                className="input input-bordered w-full"
                defaultValue={domain?.rating}
              />
            </div>
          </div>
          <button className="btn bg-green-500 hover:bg-green-700 text-white mt-3 px-5 font-bold ">
            Update Domain
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
