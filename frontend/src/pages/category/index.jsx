import { useEffect, useState } from "react";
import {
  BaseButton,
  BaseLabel,
  BaseInput,
  BaseError,
  BaseSelect,
} from "../../components/Base/Form";
import Modal from "../../components/Base/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import formatDate from "../../utils/formateDate";
import BaseDatagrid from "../../components/Base/DataGrid/BaseDatagrid";
import { categoryColumns } from "../../utils/columns";
const index = ({ setProgress }) => {
  const [isCreateMode, setIsCreateMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProgress((progress) => progress + 10);

    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setProgress((progress) => progress + 20);

        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((error) => {
        setProgress(100);
      });
  }, []);

  /**
   * Formik validation schema.
   */
  const validationSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter the name"),
  });

  /**
   * Formik initial values
   */
  const initialValues = {
    name: "",
  };

  /**
   * Formik hook
   */
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      setProgress((progress) => progress + 10);

      axios
        .post("http://localhost:3000/categories", values)
        .then((response) => {
          setProgress((progress) => progress + 20);

          setCategories((prev) => [...prev, response.data]);

          closeModal();
        })
        .catch((error) => {})
        .finally(() => {
          setProgress(100);
        });
    },
  });

  /**
   * Handle the create button.
   */
  const handleCreate = () => {
    setIsCreateMode(true);

    setValues(initialValues);

    openModal();
  };

  /**
   * Handle the edit button.
   *
   * @param {Object} row
   */
  const handleEdit = (row) => {
    setValues(row);
    openModal();
  };

  /**
   * Handle the delete button.
   *
   * @param {Object} row
   */
  const handleDelete = (row) => {
    eventBus.emit("open-confirm-modal", {
      agree: async () => {},
      disagree: () => {
        console.log("request cancelled");
      },
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Close the modal.
   *
   * @returns {void}
   */
  const closeModal = () => {
    resetForm();

    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 pb-6 pt-3 transition-all duration-300">
      <div className="flex items-center justify-between rounded-sm py-2 pl-2 pr-4 text-sm dark:text-gray-300">
        <div className="flex flex-col">
          <div className="pl-3 text-xl font-normal dark:text-gray-300">
            Categories
          </div>
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="flex items-center gap-x-2.5">
            <BaseButton onClick={handleCreate} label="Create Category" />
          </div>
        </div>
      </div>

      <BaseDatagrid
        rowsData={categories}
        headers={categoryColumns}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        forceShowNextButton={true}
        forceShowPreviousButton={true}
        appendColumns={[
          {
            Header: "Created At",
            accessor: "createdAt",
            id: "createdAt",
            Cell: ({ value }) => {
              return <div className="flex">{formatDate(value)}</div>;
            },
          },
        ]}
      />

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Modal.Header>
          {isCreateMode ? "Create Category" : "Edit Category"}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="border-b px-4 py-2.5 dark:border-gray-800">
              <div className="mb-4">
                <BaseLabel label="Name" htmFor="name" />

                <BaseInput
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  error={errors.name}
                  touched={touched.name}
                />

                <BaseError error={errors.name} touched={touched.name} />
              </div>
            </div>
            <Modal.Footer>
              <div className="flex justify-end p-2">
                <BaseButton type="submit" label="Save Category" />
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default index;
