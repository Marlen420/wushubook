import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFile from "../../hooks/usePagination/useFile";
import { deleteDocument } from "../../redux/features/counter/documentSlice";
import DocumentHeader from "./DocumentHeader/DocumentHeader";
import DocumentList from "./DocumentList/DocumentList";
import styles from './Documents.module.css'




//Документы
function Documents() {
    // Constants
    const { data } = useSelector(state=>state.documents);
    const dispatch = useDispatch();

    // Hooks
    const {
        Today,
        Yesterday,
        Other
    } = useFile(data);

    // States
    const [uploadFiles, setUploadFiles] = useState(null);

    // Functions
    const handleAddFile = (e) => e.target.nextSibling?.click();
    const handleDeleteDocument = (id) => dispatch(deleteDocument(id));
    const handleUploadFilesChange = (e) => setUploadFiles(e.target.files);

    useEffect(()=>{
        if (uploadFiles) {
            uploadFiles.forEach((item)=>{
                const file = {id: new Date()};
                console.log(item);
            })
        }
    }, [uploadFiles]);

    console.log(uploadFiles);

    return (
        <div className={styles.content}>
            <DocumentHeader
                inputChange={handleUploadFilesChange}
                addFile={handleAddFile}/>
            <DocumentList
                Today={Today}
                Yesterday={Yesterday}
                Other={Other}
                deleteItem={handleDeleteDocument}/>
        </div>
    )
}

export default Documents;