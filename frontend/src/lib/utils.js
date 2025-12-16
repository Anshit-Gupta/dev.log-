// function  to format how the createdAt date will look 
export function formatDate(date) {
    return date.toLocaleDateString("en-US",{
        month:"short",
        day:"numeric",
        year:"numeric"
    });
}