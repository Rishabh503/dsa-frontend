export const URI = "http://localhost:5000";
export const DEVURL = `${URI}`;

export const getAllQuestions = async () => {
    try {
        const response = await fetch(`${URI}/api/v1/question/getAllQuestions`);
        if (!response.ok) throw new Error("error fetching the data");
        return await response.json();
    } catch (error) {
        console.log("error from fetching the data", error);
        return [];
    }
};

export const getAllUsers = async () => {
    try {
        const response = await fetch(`${URI}/api/v1/user/allUsers`);
        if (!response.ok) throw new Error("error fetching the data");
        return await response.json();
    } catch (error) {
        console.log("error from fetching the data", error);
        return [];
    }
};

export const getOneUser = async (userId) => {
    try {
        const response = await fetch(`${URI}/api/v1/user/oneUser/${userId}`);
        if (!response.ok) throw new Error("error fetching the data");
        return await response.json();
    } catch (error) {
        console.log("error from fetching the data", error);
        return [];
    }
};

export const registerUser = async (formData) => {
    console.log(formData);
    try {
        const response = await fetch(`${URI}/api/v1/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error registering the user");
        return response.json();
    } catch (error) {
        console.log("error registering the user", error);
    }
};

export const addQues = async (formData) => {
    console.log(formData);
    try {
        const response = await fetch(`${URI}/api/v1/question/newQuestion`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error adding the question");
        return response.json();
    } catch (error) {
        console.log("error adding the question", error);
    }
};

export const updateStatus = async (questionId, userId, formData) => {
    try {
        const response = await fetch(`${URI}/api/v1/question/${questionId}/question/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error updating status");
        return response.json();
    } catch (error) {
        console.log("error updating status", error);
    }
};

export const remiderUpdate = async (reminderId, formData) => {
    try {
        const response = await fetch(`${URI}/api/v1/question/reminder/${reminderId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error updating reminder");
        return response.json();
    } catch (error) {
        console.log("error updating reminder", error);
    }
};

export const createReminder = async (questionId, userId, formData) => {
    console.log("from reminders", questionId, userId);
    try {
        const response = await fetch(`${URI}/api/v1/question/reminder/${questionId}/question/${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error creating reminder");
        return response.json();
    } catch (error) {
        console.log("error creating reminder", error);
    }
};

export const markAsStar = async (questionId, userId, formData) => {
    try {
        const response = await fetch(`${URI}/api/v1/question/markAsStar/${questionId}/question/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("error marking as star");
        return response.json();
    } catch (error) {
        console.log("error marking as star", error);
    }
};
