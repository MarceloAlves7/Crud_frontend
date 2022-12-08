import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";


const urlLoader = ({ src, width, quality }) => {
    // return `https://catalogo.armazemparaiba.com.br/public/produtos/fotos/${src}?w=${width}&q=${quality || 75}`
    return `${src}`
    
}

export default function ModalImage(props) {

    if (!props.open) {
        return null;
    }

    return (
        <Modal open={props.open} onClose={props.onClose}>

            <Box
                sx={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItens: "center",
                    justifyContent: "center",
                    width: "85%",
                    height: "95%",
                    bgcolor: "#fff",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    cursor: "pointer",
                    zIndex: 2

                }}
                    onClick={props.onClose}>
                    <CloseIcon />
                </Box>  
                {/* <Image src={`https://catalogo.armazemparaiba.com.br/public/produtos/fotos/${modalData.cd_image}`} alt={modalData.no_descricao} layout="fill" objectfit="contain" /> */}
                <img
                    loader={urlLoader}
                    src={props.src}
                    alt="Mercadoria"
                    layout="fill"   
                    objectFit="contain"
                />

            </Box>
        </Modal>
    );
}











