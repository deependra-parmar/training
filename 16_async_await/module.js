export default async function(){
    return new Promise((resolve, reject) => {
        const resolutionRatio = Math.random();

        setTimeout(() => {
            console.log("Return data after 2 seconds...");
            
            if(resolutionRatio >= 0.5){
                resolve({
                    success: true,
                    message: "Operation done successfully"
                });
            }
            else{
                reject({
                    success: false,
                    message: "Error performing operation..."
                });
            }
        }, 2000);
    });
}