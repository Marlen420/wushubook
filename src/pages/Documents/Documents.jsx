import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocuments, uploadDocument } from "../../api/documents.api";
import useFile from "../../hooks/usePagination/useFile";
import { deleteDocument, uploadFileHanlde } from "../../redux/features/counter/documentSlice";
import DocumentHeader from "./DocumentHeader/DocumentHeader";
import DocumentList from "./DocumentList/DocumentList";
import styles from './Documents.module.css'
import { updateProgressBar, setStatus } from '../../redux/features/counter/documentSlice';




//Документы
function Documents() {
    // Constants
    const { data, uploadData, status, error } = useSelector(state=>state.documents);
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

    const handleUploadProgress = (id, percent) => {
        dispatch(updateProgressBar({id, percent}));
    }

    const handleUpdateDocumentsList = () => dispatch(getAllDocuments());

    // Effects
    useEffect(()=>{
        if (uploadFiles) {
            const arr = uploadFiles;
            setUploadFiles(null);
            for (let i of arr) {
                const form = new FormData();
                form.append('docs', i);
                const fileId = new Date().getTime();
                dispatch(uploadFileHanlde({
                    id: fileId,
                    docsKey: i.name,
                    size: (i.size / 1048576).toFixed(2) + 'мб',
                    type: 'pdf',
                    percent: 0
                }));
                dispatch(uploadDocument({localId: fileId, data: form, callback: (progressEvent) =>{
                    const perc = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    handleUploadProgress(fileId, perc);
                }}))
            }
        }
    }, [uploadFiles, dispatch, handleUploadProgress]);

    useEffect(()=>{
        handleUpdateDocumentsList();
    }, []);

    return (
        <div className={styles.content}>
            <DocumentHeader
                inputChange={handleUploadFilesChange}
                addFile={handleAddFile}/>
            <DocumentList
                Today={Today}
                Yesterday={Yesterday}
                Other={Other}
                UploadData={uploadData}
                deleteItem={handleDeleteDocument}/>
        </div>
    )
}

export default Documents;