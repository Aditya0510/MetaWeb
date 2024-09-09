import Button from "../../../components/Button";
import OrangeButton from "../../../components/OrangeButton";

export default function ProductDetail1({ product1 }) {
  return (<>
    <div className="max-w-[40%] flex flex-col gap-6 z-20 max-sm:max-w-none">
      <h4 className="product-primary-title">{product1?.productTitle}</h4>
      <div>
        <img
          src={product1?.primaryImage}
        />
      </div>

      <p className="product-description">
        {product1?.productDes}
      </p>
      <div className="d-flex">
        <table
          className="w-2/5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-md:w-full"
        >
          <thead
            className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              {product1?.sizeHeading?.map((item, index) => (
                <th
                  scope="col" className="py-1"
                  key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product1?.size?.map((item, index) => (
              <tr
                key={index}
                className=" dark:bg-gray-800 border-b-[1px] border-[#2A7DE1] dark:border-gray-700"
              >
                <td
                  className="py-2"
                >{item?.mm}</td>
                <td
                  className="py-2"
                >{item?.inch}</td>
                <td
                  className="py-2"
                >{item?.fraction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2">
        <OrangeButton title={"Enquire"}
        />

        <Button title="Download Brochure"
        // className="mt-[32px]"
        />
        {/* <button className="secondary-button">Download Brochure</button> */}
      </div>
    </div>
  </>)
}