const DoctorProfileUpdate = () => {
  return (
    <div className="w-full">
      <h1>Profile Information</h1>

      <form action="" className="">
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div>
          <div>
            <label htmlFor=""></label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Specialization</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Surgeon</option>
              <option value="">NeuroSurgeon</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Ticket Price</label>
            <input type="number" placeholder="0" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileUpdate;
