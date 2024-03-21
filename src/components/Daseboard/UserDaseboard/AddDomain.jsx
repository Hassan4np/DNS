import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxousSecure from "../../Hook/useAxousSecure";


const AddDomain = () => {
  const axousesecre = useAxousSecure();
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const domaininfo = await axousesecre.post('/domain', data);
    if (domaininfo.data.insertedId) {
        reset();
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${data.headline} is added successfully`,
            showConfirmButton: false,
            timer: 1500
        });
    }
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
                <span className="label-text">Date</span>
              </label>
              <input
                type="text"
                {...register("details", { required: true })}
                placeholder="Details"
                className="input input-bordered w-full"
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
              />
            </div>
          </div>
          <button className="btn bg-green-500 hover:bg-green-700 text-white mt-3 px-5 font-bold ">
            Add Domain
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDomain;
