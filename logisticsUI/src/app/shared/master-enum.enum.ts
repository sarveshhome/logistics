export enum MasterEnum {
    role = 1,
    page_type = 2,
    site_type = 3,
    audit_type = 4,
    practice_type = 5,
    domain_provide = 6,
    email_provider = 7,
    timezone = 8,
    dns_type = 9,
    social_media_type = 10,
    third_party = 11,
    trade_associations = 12,
    pms_provider_type = 13,
    color_pallete = 14,
    banner_photography = 15,
    banner_type = 16
}
export const roles = {
    admin : {
        roleId : '1',
        url : '/admin'
    },
    customer : {
        roleId : '11',
        url : '/customer'
    },
    accountManagement : {
        roleId : '5',
        url : '/account-manager'
    }
};
export const socialMedia = [
    {
        id : 1,
        name : 'Facebook',
        isSelected: false
    },
    {
        id : 2,
        name : 'Twitter',
        isSelected: false
    },
    {
        id : 3,
        name : 'LinkedIn',
        isSelected: false
    },
    {
        id : 4,
        name : 'Yelp',
        isSelected: false
    },
    {
        id : 5,
        name : 'Blog',
        isSelected: false
    },
    {
        id : 6,
        name : 'Google+',
        isSelected: false
    },
    {
        id : 7,
        name : 'Instagram',
        isSelected: false
    },
    {
        id : 8,
        name : 'Pinterest',
        isSelected: false
    },
    {
        id : 9,
        name : 'Tumblr',
        isSelected: false
    },
    {
        id : 10,
        name : 'Other',
        isSelected: false
    }
];

