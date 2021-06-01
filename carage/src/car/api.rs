use super::{ApiCar, Car};
use crate::fairings::{Claims, Db};
use lazy_static::lazy_static;
use rocket::serde::json::Json;

lazy_static! {
    pub static ref ROUTES: Vec<rocket::Route> = routes![get, create, remove];
}

#[post("/create", format = "json", data = "<car>")]
pub async fn create(conn: Db, claims: Claims, car: Json<ApiCar>) -> Option<Json<Car>> {
    if car.owner == claims.email {
        match conn.run(move |c| Car::from_api(car.clone(), c)).await {
            Ok(u) => Some(Json(u)),
            _ => None,
        }
    } else {
        None
    }
}

//TODO: Error reporting
#[post("/", data = "<car>")]
pub async fn get(conn: Db, car: String) -> Option<Json<Car>> {
    match conn.run(move |c| Car::get(&car, c)).await {
        Ok(u) => Some(Json(u)),
        _ => None,
    }
}

#[delete("/remove", data = "<car>")]
pub async fn remove(conn: Db, claims: Claims, car: String) -> Option<Json<Car>> {
    conn.run(move |c| {
        if let Ok(carr) = Car::get(&car, c) {
            if carr.owner == claims.email {
                Car::delete(&car, c).ok().map(Json)
            } else {
                None
            }
        } else {
            None
        }
    })
    .await
}
