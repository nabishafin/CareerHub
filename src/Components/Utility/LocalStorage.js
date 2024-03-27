const getStoreJobAplication = () => {
    const storeJobAplication = localStorage.getItem('job-apliction');
    if (storeJobAplication) {
        return JSON.parse(storeJobAplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storeJobAplication = getStoreJobAplication();
    const exists = storeJobAplication.find(jobid => jobid === id);
    if (!exists)
        storeJobAplication.push(id);
    localStorage.setItem('job-apliction', JSON.stringify(storeJobAplication))
}

export { saveJobApplication, getStoreJobAplication }