import { UserType } from './usertype';
import { Feature } from './feature';

export class Previlege {
    previlegeId: string;
    userTypeId: string;
    featureId: string;
}

export class PrevilegeList {
    previlege: Previlege = new Previlege();
    usertype: UserType = new UserType();
    feature: Feature = new Feature();
}

export class PrevilegeData {
    public Data = new Array<Previlege>();
}