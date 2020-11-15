import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

export function successToaster(msg){
  toastr.success(msg)
}

export function errorToaster(msg){
  toastr.error(msg)
}

export function informalToaster(msg){
  toastr.info(msg)
}