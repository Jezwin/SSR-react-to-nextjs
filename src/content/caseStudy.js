import React from 'react';

const datas = [
    //AEM
    {
        data: [
            //enter datas in this array in object format
            {
                desc: "Help large financial organisation to outsource their AEM development activity offshore with a dedicated team",
                shortDesc: "Help large financial organisation to outsource their AEM development.",
                link: "aem1",
                problem:"Company had planned for an aggressive roll out of AEM services beyond the existing resource capacity.",
                outcome: "Faster go live and the company could launch multiple services with the same number of onroll AEM team.",
                whatWeDid: "We helped them with a remote development team, consisting of 2 Sr. AEM Developer, 2 AEM developers, 1 specialist frontend developer, 2 member QA to assist in their internal AEM developments and their Authors.",
                id: 0,
                tag: 'aem',
                title: "Adobe Experience Cloud",
                image:"./assets/Case1.png",
            },
            {
                desc: "Help large financial organisation to outsource their AEM development activity offshore with a dedicated team",
                shortDesc: "Help large financial organisation to outsource their AEM development.",
                link: "aem2",
                problem:"Company had planned for an aggressive roll out of AEM services beyond the existing resource capacity.",
                outcome: "Faster go live and the company could launch multiple services with the same number of onroll AEM team.",
                whatWeDid: "We helped them with a remote development team, consisting of 2 Sr. AEM Developer, 2 AEM developers, 1 specialist frontend developer, 2 member QA to assist in their internal AEM developments and their Authors.",
                id: 1,
                tag: 'aem',
                title: "Adobe Experience Cloud",
                image:"./assets/Case1.png",
            }
        ],
        subItems : {
            logo: "./assets/2152874.png",
            logoTitle: "Adobe Experience Cloud",
            caption: "BRONZE PARTNER",
            subCaption: (
                <div style={{display: "flex"}}>
                    <img src="./assets/adobe.png" alt="adobe" width="30px" height="25px"/>
                    <p><b>Adobe</b> solution partner</p>
                </div>
            )
        }
    },
    //E-Commerce
    {
        data: [
            //enter datas in this array in object format
            {
                desc: "",
                shortDesc: "",
                link: "",
                problem:"",
                outcome: "",
                whatWeDid: "",
                id: 0,
                tag: "ecom",
                title: "E-Commerce",
                image:"./assets/Case1.png",
            },
        ],
        subItems : {
            logo: "",
            caption: "",
            subLogo: "",
            subCaption: ""
        }
    },
    //Frontend Dev
    {
        data: [
            //enter datas in this array in object format
            {
                desc: "",
                shortDesc: "",
                link: "",
                problem:"",
                outcome: "",
                whatWeDid: "",
                tag: "fend",
                id: 0,
                title: "Frontend Development",
                image:"./assets/Case1.png",
            },
        ],
        subItems : {
            logo: "",
            caption: "",
            subLogo: "",
            subCaption: ""
        }
    }
]

export default datas;