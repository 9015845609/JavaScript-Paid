const serverUrl = "http://localhost:9000";

/**
 @usage : to get all contacts
 @method : GET
 @body : no-params
 @url : http://localhost:9000/contacts
 */
export const getAllContacts = () => {
    const dataUrl = `${serverUrl}/contacts`;
    return axios.get(dataUrl);
};

/**
 @usage : get a contact
 @method : GET
 @body : no-params
 @url : http://localhost:9000/contacts/:contactId
 */
export const getContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
};

/**
 @usage : create a contact
 @method : POST
 @body : name, imageUrl, email, mobile, company, title, groupId
 @url : http://localhost:9000/contacts/
 */
export const createContact = (contact) => {
    const dataUrl = `${serverUrl}/contacts/`;
    return axios.post(dataUrl, contact);
};

/**
 @usage : Update a contact
 @method : PUT
 @body : name, imageUrl, email, mobile, company, title, groupId
 @url : http://localhost:9000/contacts/:contactId
 */
export const updateContact = (contact, contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
};

/**
 @usage : Delete a contact
 @method : DELETE
 @body : no-params
 @url : http://localhost:9000/contacts/:contactId
 */
export const deleteContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
};

/**
 @usage : Get all groups
 @method : GET
 @body : no-params
 @url : http://localhost:9000/groups/
 */
export const getAllGroups = () => {
    const dataUrl = `${serverUrl}/groups`;
    return axios.get(dataUrl);
};


/**
 @usage : Get a group
 @method : GET
 @body : no-params
 @url : http://localhost:9000/groups/:groupId
 */
export const getGroup = (groupId) => {
    const dataUrl = `${serverUrl}/groups/${groupId}`;
    return axios.get(dataUrl);
};