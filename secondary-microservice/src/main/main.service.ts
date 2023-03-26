export class MainService {
  getHelloFromSecondary(data: string): string {
    console.log(data);
    return 'Hello World!';
  }
}
