export default function formValidator(e) {
    let { files } = e.target
    if (files.length === 0)
        return "Pic is Mendatory"
    else if (files.length === 1) {
        if (files[0].size > 1048576)
            return "Pic Size is More then 1 MB. Please Upload an Image Upto 1 MB"
        else if (files[0].type === "image/jpg" || files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/gif")
            return ""
        else
            return "invalid pic plese upload following formates : .jpg,.jpeg,.png,.gif"
    }
}
